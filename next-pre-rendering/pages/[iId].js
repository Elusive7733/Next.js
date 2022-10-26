// Core node js modules
import path from "path";
import fs from "fs/promises";

export default function ItemId(props) {
  // console.log(props.loadedItem);

  // Use this if you want to return a 404 page and fallback is set to true;
  if (!props.loadedItem) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Item {props.loadedItem.id}</h1>
      <p>{props.loadedItem.name}</p>
    </div>
  );
}

//* In order to pre-render this page we need to know the id of the product which is expected to be in the url
// ---> the context prop contains the params key which is an object that contains the dynamic route params

export async function getStaticProps(context) {
  const { params } = context;
  const ItemId = params.iId;

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  let data = JSON.parse(jsonData);

  
  const loadedItem = data.items.find((item) => Number(item.id) === Number(ItemId));

  // Use this if you want to return a 404 page and fallback is set to true;
  if (!loadedItem) {
    return {
      notFound: true,
    };
  }

  return {
    props: { loadedItem },
  };
}   

//* It is impossible to pre-render this page as is since it has dynamic routes so Next.js can't know how many pages to generate
// ---> To overcome this we can use getStaticPaths() to pre generate pages for the given paths
// ---> If a page is not pre-generated (Not specified in the paths array)
//      ---> fallback: true ---> means that the pages not specified in the paths array will be generated on the fly when the user visits the page

export async function getStaticPaths() {
  // Format of the return is important
  return {
    // ---> getStaticProps is called for each path in getStaticPaths
    paths: [{ params: { iId: "1" } }, { params: { iId: "2" } }, { params: { iId: "3" } }],
    fallback: true, // This allows to pre-generate highly visited pages but postpone the generation of less visited pages
    // fallback: 'blocking', // This makes the Next.js wait before rendering the page until getStaticProps is finished
  };
}
