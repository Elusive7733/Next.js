// Core node js modules
import path from "path";
import fs from "fs/promises";

export default function NoData(props) {
  const { items } = props;

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

//* In the Event we find no data we can display a 404 Page instead of this empty component
// ---> We return the object in getStaticProps with the notFound keyword

export async function getStaticProps() {
  const revalidataionTime = 10; // in seconds
  console.log(`Regenerating... ${revalidataionTime} seconds passed`);

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  let data = JSON.parse(jsonData);

//   data = null;
  if (!data) {
    return { notFound: true };
  }

  return {
    props: { items: data.items },
    revalidate: revalidataionTime, // This will regenerate the page every 10 seconds
  };
}
