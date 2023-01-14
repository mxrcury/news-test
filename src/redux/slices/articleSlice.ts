import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IArticle {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  launches: [];
  events: [];
}

interface IArticlesInitialState {
  articleList: Array<IArticle>;
}

const initialState: IArticlesInitialState = {
  articleList: [],
};

const articleSlice = createSlice({
  name: "arcticle",
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<IArticle[]>) => {
      state.articleList = action.payload;
    },
  },
});

export const { setArticles } = articleSlice.actions
export const arcticleReducer = articleSlice.reducer 
