import {
    signIn,
    signOut
} from "aws-amplify/auth";
import { redirect } from "next/navigation";

export async function handleSignIn(
    previousState: string | undefined | null,
    formData: FormData,
) {
    let redirectLink = "/admin";
    try {
        await signIn({
            username: String(formData.get("email")),
            password: String(formData.get("password")),
        });
    } catch (error) {
        console.log(error);
        return "handleSignIn error";
    }

    redirect(redirectLink);
}

export async function handleSignOut() {
    try {
        await signOut();
    } catch (error) {
        console.log(error);
        return "handleSignOut error";
    }
    redirect("/auth/login");
}
