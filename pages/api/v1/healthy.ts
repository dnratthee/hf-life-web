import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from "@/lib/mongodb";

export type Healthy = {
    id: string;
    title: string;
    detail: string;
    image: string;
}

export default async function handler(req: NextApiRequest,
    res: NextApiResponse<any>) {
    res.json(await HealthyDb());
};

export async function HealthyDb() {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DB);

        const healthy = await db
            .collection("healthy")
            .find({})
            .sort({ metacritic: -1 })
            .limit(10)
            .toArray();

        return (healthy);
    } catch (e) {
        console.error(e);
        return ({});
    }
};