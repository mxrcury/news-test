import React from "react";
import { ArticleCard } from "../ArticleCard/ArticleCard";
import { Grid } from "@mui/material";
import { useDispatch } from "./../../redux/hooks";
import { setArticleQty } from "../../redux/slices/articleSlice";
import { useFetchArticles } from "./hooks/useFetchArticles";

interface IArticleCards {
  search: string;
}

const ArticleCards = ({ search }: IArticleCards): JSX.Element => {
  const dispatch = useDispatch();
  const { articles } = useFetchArticles();

  return (
    <Grid container spacing={5} columns={{ xs: 4, sm: 8, md: 12 }}>
      {articles
        .filter((article) => {
          if (article.title.toLowerCase().includes(search.toLowerCase())) {
            return article;
          } else if (article.summary.toLowerCase().includes(search.toLowerCase())) {
            return article;
          }
          return false;
        })
        .map((article, _, articles) => {
          dispatch(setArticleQty(articles.length));
          return (
            <Grid item key={article.id} xs={2} sm={4} md={4}>
              <ArticleCard article={article} search={search} />
            </Grid>
          );
        })}
    </Grid>
  );
};

export { ArticleCards };
