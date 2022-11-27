import { GetStaticProps, InferGetStaticPropsType } from "next";

import AppBar from "@/components/AppBar";
import { FoodCard } from "@/components/ImageCard";

import { Grid } from "@mui/material";

import type { Healthy } from "../api/v1/healthy";
import { HealthyDb } from "../api/v1/healthy";

export const getStaticProps: GetStaticProps = async (context) => {
  const healthy: Healthy[] = JSON.parse(JSON.stringify(await HealthyDb()));
  return {
    props: { healthy },
    revalidate: 60,
  };
};

export default function Healthy({
  healthy,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <main>
        <AppBar>อาหารเพื่อสุขภาพ</AppBar>
        <Grid
          container
          spacing={2}
          sx={{ justify: "space-between", alignItems: "stretch" }}
        >
          {healthy.map((food: Healthy, i: number) => {
            return (
              <Grid
                key={i}
                item
                xs={12}
                sm={6}
                md={4}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <FoodCard data={food} />
              </Grid>
            );
          })}
        </Grid>
      </main>
    </div>
  );
}
