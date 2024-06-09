import {
    signIn,
    signOut,
    confirmSignIn,
    signUp
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
        if (nextStep.signInStep === "CONFIRM_SIGN_UP") {
            return "User needs to request Admin to confirm account";
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

export async function handleSignUp(
    previousState: string | undefined | null,
    formData: FormData
){
    try {
        const { isSignUpComplete, userId, nextStep } = await signUp({
            username: String(formData.get("email")),
            password: String(formData.get("password")),
            options: {
                userAttributes: {
                    email: String(formData.get("email")),
                    given_name: String(formData.get("given_name")),
                    family_name: String(formData.get("family_name")),
                    address: String(formData.get("address")),
                },
                autoSignIn: true,
            },
        });
        console.log(`isSignUpComplete: ${isSignUpComplete}`);
        console.log(`nextStep: ${JSON.stringify(nextStep)}`);
    } catch (error) {
        console.log(error);
        return "handleSignUp error";
    }
    redirect("/auth/login")
}
