import { TextField, InputAdornment } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import SearchIcon from "../../assets/search-icon.svg";
import styles from "./SearchForm.module.scss";

interface ISearchFormProps {
  children: (ctx: string) => JSX.Element;
}

const SearchForm = ({ children }: ISearchFormProps): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  return (
    <>
      <TextField
        type="search"
        placeholder="Search"
        variant="outlined"
        size="small"
        className={styles.searchInput}
        value={search}
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
      {children(search)}
    </>
  );
};

export { SearchForm };
