import * as jose from 'jose';
import { cookies } from 'next/headers';

async function openSessionToken(token) {
    const secret = new TextEncoder().encode(process.env.AUTH_SECRET);
    const { payload } = await jose.jwtVerify(token, secret);

    return payload;
}

async function createSessionToken(payload) {
    const secret = new TextEncoder().encode(process.env.AUTH_SECRET);
    const session = await new jose.SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('1d')
    .sign(secret);

    const {exp, role} = await openSessionToken(session);

    cookies().set('session', session, {
        expires: Number(exp) * 1000,
        path: '/',
        httpOnly: true
    });
}

async function isSessionValid() {
    try {
        const sessionCookie = cookies().get('session');

        if (!sessionCookie) {
            console.warn('Session cookie not found');
            return false;
        }

        const { value } = sessionCookie;

        // Certifique-se de que openSessionToken trata exceções corretamente
        const { exp } = await openSessionToken(value);

        if (!exp) {
            console.error('Invalid token: expiration time not found');
            return false;
        }

        const currentDate = new Date().getTime();
        const expirationTime = Number(exp) * 1000;

        if (isNaN(expirationTime)) {
            console.error('Invalid expiration time in token:', exp);
            return false;
        }

        const isValid = expirationTime > currentDate;
        console.log('Session validity:', isValid);
        return isValid;
    } catch (error) {
        console.error('Error in session validation:', error);
        return false;
    }
}

function destroySession() {
    cookies().delete('session');
}

const AuthService = {
    openSessionToken,
    createSessionToken,
    isSessionValid,
    destroySession
}

export default AuthService;