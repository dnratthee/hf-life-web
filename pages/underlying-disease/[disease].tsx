import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from "next";

import { underlyingDisease } from "@/lib/underlyingDisease";
import AppBar from "@/components/AppBar";

import { FoodCard } from "@/components/ImageCard";
import { Grid } from "@mui/material";

import type { UDisease } from "../api/v1/udisease";
import { UDiseaseDb } from "../api/v1/udisease";

export const getStaticProps: GetStaticProps = async (context) => {
  const disease: any = context?.params?.disease;
  const udisease: UDisease[] = JSON.parse(
    JSON.stringify(await UDiseaseDb(disease))
  );
  return {
    props: { udisease, disease },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Array.from(underlyingDisease, (udisease: any, index) => ({
    params: {
      disease: udisease.slug.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default function Disease({
  udisease,
  disease,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <main>
        <AppBar>
          อาหารที่ไม่เหมาะสำหรับ
          <br />
          ผู้ที่เป็น
          {underlyingDisease?.find((d: any) => d.slug === disease)?.name}
        </AppBar>
        <Grid container spacing={2}>
          {udisease.map((food: UDisease, i: number) => {
            return (
              <Grid key={i} item xs={12} sm={6} md={4}>
                <FoodCard data={food} />
              </Grid>
            );
          })}
        </Grid>
      </main>
    </div>
  );
}
