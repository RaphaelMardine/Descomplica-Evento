import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma';

export default async function handle(req:NextApiRequest, res:NextApiResponse) {
    const {eventName, CNPJ, adress, price, quantity, url} = req.body;

    await prisma.PostEvent.create({
        data: {
            eventName: eventName,
            CNPJ: CNPJ, adress: adress, price: price, quantity: quantity, url: url
        }
    })
    return res.status(201).json({});
}    