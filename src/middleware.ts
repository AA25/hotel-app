import { NextRequest, NextResponse } from "next/server";
import { authenticatedUser } from "@/utils/amplify-server-utils";

export async function middleware(request: NextRequest) {
    const response = NextResponse.next();
    const user = await authenticatedUser({ request, response });

    const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
    const isOnAdmin = request.nextUrl.pathname.startsWith("/admin");
    const isOnLoginPage =  request.nextUrl.pathname.startsWith("/auth/login")

    if (isOnDashboard) {
        if (!user)
            return NextResponse.redirect(new URL("/auth/login", request.nextUrl));

        return response;
    }

    if (isOnAdmin) {
        if (!user)
            return NextResponse.redirect(new URL("/auth/login", request.nextUrl));

        if (!user.isAdmin)
            return NextResponse.redirect(new URL("/dashboard", request.nextUrl));

        return response;
    }

    if (isOnLoginPage && user) {
        return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
    }

    return response;

}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
