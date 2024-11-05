import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';

const prisma = new PrismaClient();

async function createAccount(formData) {
    'use server';

    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    const hashPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
        data: {
            name,
            email,
            password: hashPassword
        }
    });

    redirect('/login');
}

async function login(formData) {
    'use server';

    const email = formData.get('email');
    const password = formData.get('password');

    const user = await prisma.user.findFirst({
        where: {
            email
        }
    });

    if (!user) {
        console.log('Usuário não existe!');
        return
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        console.log('Usuário ou senha inválidos!')
        return
    }

    redirect('/');
}

const AuthActions = {
    createAccount,
    login
}

export default AuthActions;
