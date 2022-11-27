import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from "@/lib/mongodb";

export type UDisease = {
    id: string;
    disease: string;
    title: string;
    detail: string;
    image: string;
}

export default async function handler(req: NextApiRequest,
    res: NextApiResponse<any>) {
    const { disease } = req.query
    res.json(await UDiseaseDb(disease));
};

export async function UDiseaseDb(disease: any) {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DB);

        const udisease = await db
            .collection("udisease")
            .find({ disease: disease })
            .sort({ metacritic: -1 })
            .limit(10)
            .toArray();

        return (udisease);
    } catch (e) {
        console.error(e);
        return ({});
    }
};