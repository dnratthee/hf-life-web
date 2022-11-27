import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

import styles from "./ImageCard.module.css";

type Props = {
  data: {
    id: string;
    title: string;
    detail: string;
    image: string;
  };
};

export const KnowCard = ({ data }: Props) => (
  <Card
    variant="outlined"
    sx={{
      color: "primary.contrastText",
      display: "flex",
      height: "100%",
      border: "4px solid rgba(0, 0, 0, 0.12)",
    }}
    className={styles.knowCard}
  >
    <div>
      <CardMedia
        component="img"
        height="200"
        image={"/images/" + data.image}
        alt=""
      />
      <CardContent style={{ paddingBottom: "8px" }}>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography className={styles.CardText} variant="h6">
          {data.detail}
        </Typography>
      </CardContent>
    </div>
  </Card>
);

export const FoodCard = ({ data }: Props) => (
  <Card
    variant="outlined"
    sx={{
      display: "flex",
      color: "primary.contrastText",
      height: "100%",
      border: "4px solid rgba(0, 0, 0, 0.12)",
    }}
  >
    <CardMedia
      component="img"
      sx={{ width: 120 }}
      image={"/images/food/" + data.image}
      alt=""
    />
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <CardContent sx={{ flex: "1 0 auto", padding: "8px" }}>
        <Typography gutterBottom variant="h6" component="div">
          {data.title}
        </Typography>
        <Typography className={styles.CardText} variant="h6">
          {data.detail}
        </Typography>
      </CardContent>
    </Box>
  </Card>
);
