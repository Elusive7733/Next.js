// Core node js modules
import path from "path";
import fs from "fs/promises";

export default function NoData(props) {
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

//* In the event getStaticProps fail to retrieve data or retrieves incorrect data
// ---> We can use the notFound key (that is a string) to return a 404 page
// ---> we can use the redirect key (that is also an object) to redirect the user to another page

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  let data = JSON.parse(jsonData);

  //   data = null;
  if (!data) {
    return { redirect: { destination: "/" } }; // This will redirect the user to the home page
  }

  if (data.items.length === 0) {
    return { notFound: true };
  }

  return {
    props: { items: data.items },
  };
}
