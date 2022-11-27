import Link from "next/link";
import Router from "next/router";

import { useEffect, useState } from "react";

import { User } from "@/lib/user";
import { homepage } from "@/lib/homepage";
import AppBar from "../components/AppBar";

import ActionAreaCard from "../components/ActionAreaCard";
import { Grid } from "@mui/material";

export default function Home() {
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    let nuser: User | undefined;
    if (localStorage.getItem("user")) {
      nuser = JSON.parse(localStorage.getItem("user") || "");
    }
    if (
      !nuser ||
      !nuser.gender ||
      !nuser.age ||
      !nuser.weight ||
      !nuser.height
    ) {
      Router.push("/user");
    }
    setUser(nuser);
  }, []);

  if (!user || !user.gender || !user.age || !user.weight || !user.height) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <main>
        <AppBar>
          แอพพลิเคชั่นอาหารเพื่อ
          <br />
          สุขภาพสำหรับผู้สูงอายุ
        </AppBar>
        <Grid container spacing={2}>
          {homepage.map((section) => {
            return (
              <Grid key={section.slug} item xs={6} sm={6} md={4}>
                <Link
                  href={`/${section.slug}`}
                  key={section.name}
                  style={{ textDecoration: "none" }}
                >
                  <ActionAreaCard data={section} />
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </main>
    </div>
  );
}
