import styles from "../styles/Home.module.css";
import Link from 'next/link';

// The function below behaves like a react component
// The component below is Pre-Rendered to an HTML

// This Pre-Rendering is the reason why Next.js doesn't have an index.html like react
export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello Next world!</h1>
      <ul>
        <li>
          {/* Using an Anchor tag have a disadvantage, We send a new http request to load this new page,
          any application state will be lost, even the state on redux / context */}
          {/* <a href="/portfolio"></a> */}
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          {/* Replace prop replaces the page so we can't access history {Can't go back} */}
          <Link replace href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
}
