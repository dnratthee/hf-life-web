import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

type Props = {
  data: {
    name: string;
    image?: string;
  };
};

export default function ActionAreaCard({ data }: Props) {
  return (
    <Card
      sx={{
        backgroundColor: "secondary.main",
        color: "secondary.contrastText",
        minHeight: 150,
        display: "flex",
        alignItems: "center",
        borderRadius: "15px",
        height: "100%",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data.image}
          alt=""
          style={{ padding: "20px", objectFit: "scale-down" }}
        />
        <CardContent style={{ padding: "0px" }}>
          <Typography gutterBottom variant="h6" component="div" align="center">
            {data.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function ActionCard({ data }: Props) {
  return (
    <Card
      sx={{
        backgroundColor: "secondary.main",
        color: "secondary.contrastText",
        minHeight: 75,
        display: "flex",
        alignItems: "center",
        borderRadius: "15px",
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" align="center">
            {data.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
