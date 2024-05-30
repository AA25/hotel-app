import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        Welcome, please sign in.
      </div>
      <Link href="/auth/login"> Sign in</Link>
    </main>
  );
}
