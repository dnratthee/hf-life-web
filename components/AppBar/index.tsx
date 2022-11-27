import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Router from "next/router";

import Link from "next/link";
import Image from "next/image";

import { Grid } from "@mui/material";

export const ButtonAppBar = (props: any) => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        {props.back && (
          <IconButton
            onClick={() => Router.back()}
            size="large"
            edge="start"
            color="inherit"
            aria-label="back"
            sx={{ mr: 2 }}
          >
            <ArrowBackIcon />
          </IconButton>
        )}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {props.children}
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
);

export const mAppBar = (props: any) => (
  <Grid
    container
    spacing={0}
    style={{ marginBottom: "16px", minHeight: "80px" }}
  >
    <Grid item xs={3}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <Link href="/">
          <Image
            unoptimized
            priority
            src="/logo.svg"
            fill
            alt="logo"
            style={{ objectFit: "contain" }}
          />
        </Link>
      </div>
    </Grid>
    <Grid
      item
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      xs={9}
    >
      <Typography
        component="div"
        sx={{
          color: "primary.contrastText",
          fontSize: "calc(16px + 2vw)",
          textAlign: "center",
        }}
      >
        {props.children}
      </Typography>
    </Grid>
  </Grid>
);

export default mAppBar;
