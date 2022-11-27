import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from "@/lib/mongodb";

export type Knowledge = {
    id: string;
    title: string;
    detail: string;
    image: string;
}

export default async function handler(req: NextApiRequest,
    res: NextApiResponse<any>) {
    res.json(await KnowledgeDb());
};

export async function KnowledgeDb() {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DB);

        const knowledge = await db
            .collection("knowledge")
            .find({})
            .sort({ metacritic: -1 })
            .limit(10)
            .toArray();

        return (knowledge);
    } catch (e) {
        console.error(e);
        return ({});
    }
};