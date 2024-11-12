import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';
import AuthService from '../services/auth-service';

const prisma = new PrismaClient();

async function createAccount(formData) {
    'use server';

    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    const hashPassword = await bcrypt.hash(password, 10);

    await prisma.usuario.create({
        data: {
            usuario_nome: name,
            usuario_email: email,
            usuario_senha: hashPassword
        }
    });

    redirect('/login');
}

async function login(formData) {
    'use server';

    const email = formData.get('email');
    const password = formData.get('password');

    const user = await prisma.usuario.findFirst({
        where: {
            usuario_email: email
        }
    });

    if (!user) {
        console.log('Usuário não existe!');
        return;
    }

    const isMatch = await bcrypt.compare(password, user.usuario_senha);

    if (!isMatch) {
        console.log('Usuário ou senha inválidos!');
        return;
    }

    await AuthService.createSessionToken({
        sub: user.usuario_id,
        name: user.usuario_nome, 
        email: user.usuario_email
    });

    redirect('/portal');
}

const AuthActions = {
    createAccount,
    login
}

export default AuthActions;
