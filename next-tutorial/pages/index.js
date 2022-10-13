import styles from "../styles/Home.module.css";

// The function below behaves like a react component
// The component below is Pre-Rendered to an HTML

// This Pre-Rendering is the reason why Next.js doesn't have an index.html like react
export default function Home() {
  return (
    <div className={styles.container}>
    <h1>Hello Next world!</h1>
    </div>
  );
}
