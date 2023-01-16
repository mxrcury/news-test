import React from "react";
import styles from "./Article.module.scss";
import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "../../assets/arrow-more.svg";
import { useFetchCurrentArticle } from "./hooks/useFetchCurrentArticle";

const Article = (): JSX.Element => {
  const { currentArticle } = useFetchCurrentArticle();
  return (
    <div className={styles.articleContainer}>
      <img className={styles.articleBackground} src={currentArticle.imageUrl} alt={`Background`} />
      <div className={styles.articleContent}>
        <Container maxWidth="lg" className={styles.articleContent}>
          <h2 className={styles.articleTitle}>{currentArticle.title}</h2>
          <p className={styles.articleText}>{currentArticle.summary}</p>
          <Button to="/" component={Link} variant="text">
            <div className={styles.backButtonContainer}>
              <img src={ArrowBackIcon} alt="Back" className={styles.arrowBackIcon} />
              <span className={styles.buttonMore}>Back to homepage</span>
            </div>
          </Button>
        </Container>
      </div>
    </div>
  );
};

export { Article };
