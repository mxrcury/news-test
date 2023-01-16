import React from "react";
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import styles from "./ArticleCard.module.scss";
import { IArticle } from "../../redux/slices/articleSlice";
import CalendarIcon from "../../assets/calendar-icon.svg";
import ArrowMoreIcon from "../../assets/arrow-more.svg";
import { CardContainerStyle } from "./stylesData";
import { Link } from "react-router-dom";
import Highlighter from "react-highlight-words";

type ArticlePropsType = {
  article: IArticle;
  search: string;
};

const ArticleCard = ({ article, search }: ArticlePropsType): JSX.Element => {
  return (
    <Card sx={CardContainerStyle}>
      <img className={styles.articleImage} src={article.imageUrl} alt={`${article.title}`} />
      <CardContent>
        <div className={styles.date}>
          <img className={styles.calendarIcon} src={CalendarIcon} alt={`Date ${article.publishedAt}`} />
          <span>{new Date(article.publishedAt).toDateString()}</span>
        </div>
        <Typography className={styles.articleTitle} gutterBottom variant="h5" component="div">
          <Highlighter searchWords={[search]} autoEscape={true} textToHighlight={article.title} />
        </Typography>
        <Typography className={styles.articleDescription} variant="body2" color="text.secondary">
          <Highlighter searchWords={[search]} autoEscape={true} textToHighlight={article.summary} />
        </Typography>
      </CardContent>
      <CardActions>
        <Button to={`/article/${article.id}`} component={Link} size="small">
          <span className={styles.buttonMore}>Read more</span>
          <img src={ArrowMoreIcon} alt="More" />
        </Button>
      </CardActions>
    </Card>
  );
};
export { ArticleCard };
