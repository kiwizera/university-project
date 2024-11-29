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

    redirect('/garagem');
}

async function createShippingAndOrder(formData) {
    'use server';

    const usuario_id = formData.get('usuario_id');
    const produto_id = formData.get('produto_id');
    const pedido_preco = formData.get('pedido_preco');
    const endereco_nome = formData.get('nome');
    const endereco_logradouro = formData.get('logradouro');
    const endereco_numero = formData.get('numero');
    const endereco_complemento = formData.get('complemento');
    const endereco_cep = formData.get('cep');
    const endereco_cidade = formData.get('cidade');
    const endereco_estado = formData.get('estado');

    await prisma.endereco.create({
        data: {
            usuario_id,
            endereco_nome,
            endereco_logradouro,
            endereco_numero,
            endereco_complemento,
            endereco_cep,
            endereco_cidade,
            endereco_estado,
        }
    });

    const endereco = await prisma.endereco.findFirst({
        where: {
            usuario_id,
            endereco_nome,
            endereco_logradouro,
            endereco_numero,
            endereco_complemento,
            endereco_cep,
            endereco_cidade,
            endereco_estado,
        }
    });

    await prisma.pedido.create({
        data: {
            usuario_id,
            endereco_id: endereco.endereco_id,
            produto_id,
            pedido_preco: parseFloat(pedido_preco)
        }
    });

    await prisma.produto.update({
        where: {
            produto_id
        },
        data: {
            produto_ativo: false
        }
    })

    redirect('/garagem');
}

const AuthActions = {
    createAccount,
    login,
    createShippingAndOrder
}

export default AuthActions;
