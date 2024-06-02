import {
    signIn,
    signOut,
    confirmSignIn
} from "aws-amplify/auth";
import { redirect } from "next/navigation";

export async function handleSignIn(
    previousState: string | undefined | null,
    formData: FormData,
) {
    let redirectLink = "/admin";
    try {
        const { isSignedIn, nextStep } = await signIn({
            username: String(formData.get("email")),
            password: String(formData.get("password")),
        });
        if(nextStep.signInStep === "CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED") {
            await confirmSignIn({
                challengeResponse: "1234567",
            })
        }
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
