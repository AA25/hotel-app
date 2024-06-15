"use client";
import { handleSignOut } from "@/lib/cognitoActions";

export default function LogoutForm() {
    return (
        <form action={handleSignOut} className="mb-3">
            <button type="submit" className="btn btn-warning">
                Sign Out
            </button>
        </form>
    );
}
