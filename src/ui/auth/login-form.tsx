"use client";

import { useFormState, useFormStatus } from "react-dom";
import { handleSignIn } from "@/lib/cognitoActions";
export default function LoginForm() {
    const [errorMessage, formAction] = useFormState(handleSignIn, null)
    return (
        <form action={formAction}>
            <div>
                <h1>
                    Please log in to continue.
                </h1>
                <div>
                    <div>
                        <label htmlFor="password">
                            Email
                        </label>
                    </div>
                    <div>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            required
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="password">
                            Password
                        </label>
                    </div>
                    <div>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            required
                            minLength={6}
                        />
                    </div>
                </div>
            </div>
            <LoginButton />
            <div>
                <div>
                    {errorMessage &&
                        <p style={{color: "red"}}>{errorMessage}</p>
                    }
                </div>
            </div>
        </form>
    );
}

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <button className="mt-4 w-full" aria-disabled={pending}>
            Log in
        </button>
    );
}
