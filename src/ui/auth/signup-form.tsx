"use client";

import { useFormState, useFormStatus } from "react-dom";
import { handleSignUp } from "@/lib/cognitoActions";

export default function SignUpForm() {
    const [errorMessage, formAction] = useFormState(handleSignUp, null)

    return (
        <form action={formAction}>
            <div>
                <h1>
                    Please create an account.
                </h1>
                <div>
                    <div>
                        <label htmlFor="given_name">
                            Given Name
                        </label>
                    </div>
                    <div>
                        <input
                            id="given_name"
                            type="text"
                            name="given_name"
                            placeholder="Enter your given name"
                            required
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="family_name">
                            Family Name
                        </label>
                    </div>
                    <div>
                        <input
                            id="family_name"
                            type="text"
                            name="family_name"
                            placeholder="Enter your family name"
                            required
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="address">
                            Address
                        </label>
                    </div>
                    <div>
                        <input
                            id="family_name"
                            type="text"
                            name="family_name"
                            placeholder="Enter your family name"
                            required
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="email">
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
            <SignUpButton />
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

function SignUpButton() {
    const { pending} = useFormStatus();

    return (
        <button className="" aria-disabled={pending}>
            Create account
        </button>
    );
}
