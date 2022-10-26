// Core node js modules
import path from "path";
import fs from "fs/promises";
import Link from "next/link";

export default function ISR(props) {
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

//* If the data changes frequently we have to rebuild and redeploy the app every time, which is not efficient
//. ---> To Overcome this we can do 2 of the following things
// 1 ---> We can use useEffect to fetch the latest data, while displaying the old data until the new data is fetched
// 2 ---> We implement Incremental Static Regeneration (ISR) which will rebuild the page every x seconds (This is better)

export async function getStaticProps() {
  const revalidataionTime = 10; // in seconds
  console.log(`Regenerating... ${revalidataionTime} seconds passed`);

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: { items: data.items },
    revalidate: revalidataionTime, // This will regenerate the page every 10 seconds
  };
}
