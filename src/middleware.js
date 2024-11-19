import { NextResponse } from "next/server";
import AuthService from "./modules/auth/services/auth-service";

export const config = {
    matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};

const publicRoutes = [
    '/',
    '/registrar',
    '/login',
    '/modelos'
];

export async function middleware(req) {
    const pathname = req.nextUrl.pathname;

    console.log('Processing request for:', pathname);

    if (publicRoutes.includes(pathname)) {
        console.log('Public route detected:', pathname);
        return NextResponse.next();
    }

    try {
        const session = await AuthService.isSessionValid();
        console.log('Session status:', session);

        if (!session) {
            const isAPIRoute = pathname.startsWith('/api');
            if (isAPIRoute) {
                console.log('Unauthorized API access');
                return NextResponse.json({ message: 'Não autorizado' }, { status: 401 });
            }

            console.log('Redirecting to login...');
            return NextResponse.redirect(new URL('/login', req.url));
        }
    } catch (error) {
        console.error('Middleware error:', error);
        return NextResponse.json({ message: 'Erro interno no servidor' }, { status: 500 });
    }

    console.log('Session valid, granting access');
    return NextResponse.next();
}
