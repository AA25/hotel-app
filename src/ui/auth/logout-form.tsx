"use client";
import { handleSignOut } from "@/lib/cognitoActions";

export default function LogoutForm() {
    return (
        <form action={handleSignOut}>
            <button>
                <div>Sign Out</div>
            </button>
        </form>
    );
}
