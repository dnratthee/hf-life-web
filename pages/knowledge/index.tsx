import { InferGetStaticPropsType } from "next";

import { Grid } from "@mui/material";

import { KnowCard } from "@/components/ImageCard";
import AppBar from "@/components/AppBar";

import type { Knowledge } from "../api/v1/knowledge";
import { KnowledgeDb } from "../api/v1/knowledge";

export async function getStaticProps() {
  const knowledge: Knowledge[] = JSON.parse(
    JSON.stringify(await KnowledgeDb())
  );
  return {
    props: { knowledge },
    revalidate: 60,
  };
}

export default function Knowledge({
  knowledge,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <main>
        <AppBar>
          ความรู้เพิ่มเติมเกี่ยวกับ
          <br />
          ผู้สูงอายุ
        </AppBar>
        <Grid container spacing={2}>
          {knowledge.map((know, i) => {
            return (
              <Grid key={i} item xs={12} sm={6} md={4}>
                <KnowCard data={know} />
              </Grid>
            );
          })}
        </Grid>
      </main>
    </div>
  );
}
