import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
      <main>
          <div>
              Welcome, please sign in.
          </div>
          <Link href="/auth/login">
              <button> Sign in </button>
          </Link>
          <div>
              Or sign up
          </div>
          <Link href="/auth/signup">
              <button> Sign up</button>
          </Link>
      </main>
  );
}
