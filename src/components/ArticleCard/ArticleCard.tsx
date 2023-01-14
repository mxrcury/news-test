import React, { FC } from "react";

import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import styles from "./ArticleCard.module.scss";
import { IArticle } from "../../redux/slices/articleSlice";
import CardImage from "../../assets/card.png";
import CalendarIcon from "../../assets/calendar-icon.svg";

type ArticlePropsType = IArticle;

const ArticleCard = (): JSX.Element => {
  return (
    <Card sx={{ boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)", borderRadius: "5px", border: "1px solid #EAEAEA" }}>
      <img src={CardImage} alt="card" />
      <CardContent>
        <div className={styles.date}>
          <img className={styles.calendarIcon} src={CalendarIcon} alt="Date" />
          <span>June 29th, 2021</span>
        </div>
        <Typography className={styles.articleTitle} gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography className={styles.articleDescription} variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: "black" }}>
          Read more
          {`->`}
        </Button>
      </CardActions>
    </Card>
  );
};
export { ArticleCard };
