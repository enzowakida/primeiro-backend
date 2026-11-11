import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        metodo: 'GET',
        mensagem: 'Busca/Leitura de dados realizada.'
    });
}