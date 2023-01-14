import React from "react";
import { ArticleCard } from "../ArticleCard/ArticleCard";
import { Grid } from "@mui/material";

const ArticleCards = (): JSX.Element => {
  return (
    <Grid container spacing={5} columns={{ xs: 4, sm: 8, md: 12 }}>
      {new Array(10).fill(10).map((card) => (
        <Grid item key={Date.now()} xs={2} sm={4} md={4}>
          <ArticleCard />
        </Grid>
      ))}
    </Grid>
  );
};

export { ArticleCards };
