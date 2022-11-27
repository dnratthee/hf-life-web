import Link from "next/link";

import { underlyingDisease } from "@/lib/underlyingDisease";
import AppBar from "@/components/AppBar";

import { ActionCard } from "@/components/ActionAreaCard";
import { Grid } from "@mui/material";

export default function Underlying() {
  return (
    <div>
      <main>
        <AppBar>ผู้มีโรคประจำตัว</AppBar>
        <Grid
          className="dcard"
          container
          spacing={2}
          sx={{ padding: "35px 65px" }}
        >
          {underlyingDisease.map((section) => {
            return (
              <Grid key={section.slug} item xs={12} sm={6} md={4}>
                <Link
                  href={`/underlying-disease/${section.slug}`}
                  key={section.name}
                  style={{ textDecoration: "none" }}
                >
                  <ActionCard key={section.slug} data={section} />
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </main>
    </div>
  );
}
