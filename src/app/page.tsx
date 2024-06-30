import styles from "./page.module.css";
import Link from "next/link";
import { Button } from "react-bootstrap";

export default function Home() {
  return (
      <main>
          <div>
              <h1>
                Welcome, please sign in.
              </h1>
          </div>
          <Link href="/auth/login">
              <Button> Sign in </Button>
          </Link>
          <div>
              Or sign up
          </div>
          <Link href="/auth/signup">
              <Button> Sign up</Button>
          </Link>
      </main>
  );
}
