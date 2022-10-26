// Core node js modules
import path from "path";
import fs from "fs/promises";
// working with fs will fail if we try it on the client side beacuse browser side javascript can't access the file system
// ---> this import will be stripped out of the client side bundle because Next.js knows that it's only used on the server side (used in getStaticProps)

//Next.js will pre-render the page at build time by default if it doesn't contain dynamic data

export default function PreRendering(props) {
  const { items } = props;

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Link href={`/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}

//* We want to load the data from the backend without the client waiting for an http request to be completed
// ---> Instead we will prefetch the data before this component is created
// ---> So when the client recieves this page it will be rendered with all the data

// This function prepares the props for the component
// ---> This function will always be executed first
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json"); // process.cwd() returns the current working directory (it always returns the root directory of the project)
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  // This function is secure and will only be executed on the server and it will not be shipped to the client
  // ---> So putting the database credentials here is safe

  //. Always must return an object with props key
  return {
    props: { items: data.items },
  };
}
