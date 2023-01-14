import { Container, InputAdornment, TextField } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
import SearchIcon from "../../assets/search-icon.svg";
import React, { FC } from "react";
import styles from "./Home.module.scss";
import { useSearchInput } from "./hooks/useSearchInput";
import { ArticleCards } from "../../components";

const Home = (): JSX.Element => {
  const { search, onChangeSearch } = useSearchInput();
  // add search attributes and put them all attributes from Text field of search input
  return (
    <Container maxWidth="lg" disableGutters>
      <h2 className={styles.filterTitle}>Filter by keywords</h2>
      <TextField
        placeholder="Search"
        type="search"
        variant="outlined"
        size="small"
        className={styles.serachInput}
        onChange={onChangeSearch}
        sx={{ width: "600px", marginBottom: "40px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={SearchIcon} alt="Search" />
            </InputAdornment>
          ),
        }}
      />
      <h2 className={styles.resultTitle}>Results: {10}</h2>
      <hr className={styles.line} />
      <ArticleCards />
    </Container>
  );
};

export { Home };
