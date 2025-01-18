import { fetchAuthSession } from "aws-amplify/auth";

export async function handleAddHotel (
    previousState: string | undefined | null,
    formData: FormData,
) {
    try {
        const  cognitoTokens = (await fetchAuthSession()).tokens;
        let rawIdToken = cognitoTokens?.idToken?.toString();

        const response = await fetch('https://wimy1lf81d.execute-api.eu-west-2.amazonaws.com/test', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${rawIdToken}`,
                'Content-Type': 'multipart/form-data',
            },
            body: formData,
        });

        console.log(JSON.stringify(response.body));

        return "Success";
    } catch (error) {
        console.log(error);
        return "Error";
    }

}
