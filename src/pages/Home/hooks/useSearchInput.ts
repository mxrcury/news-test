import React, { useState } from "react";

type useSearchInputType = {
  search: string;
  onChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const useSearchInput = (): useSearchInputType => {
  const [search, setSearch] = useState<string>("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>): void => setSearch(e.target.value);

  return { search, onChangeSearch };
};
