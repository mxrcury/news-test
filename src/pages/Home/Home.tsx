import React from "react";
import { Container } from "@mui/material";
import { ArticleCards, SearchForm } from "../../components";
import styles from "./Home.module.scss";
import { useSelector } from "../../redux/hooks";

const Home = (): JSX.Element => {
  const { article } = useSelector((state) => state);

  return (
    <Container maxWidth="lg" disableGutters>
      <h2 className={styles.filterTitle}>Filter by keywords</h2>
      <SearchForm>
        {(search) => (
          <>
            <h2 className={styles.resultTitle}>Results: {article.articlesQty}</h2>
            <hr className={styles.line} />
            <ArticleCards search={search} />
          </>
        )}
      </SearchForm>
    </Container>
  );
};

export { Home };
