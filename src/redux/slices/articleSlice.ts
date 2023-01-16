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
  articlesQty: number;
}

const initialState: IArticlesInitialState = {
  articleList: [],
  articlesQty: 0,
};

const articleSlice = createSlice({
  name: "arcticle",
  initialState,
  reducers: {
    setArticles: (state: IArticlesInitialState, action: PayloadAction<IArticle[]>) => {
      state.articleList = action.payload;
      state.articlesQty = action.payload.length;
    },
    setArticleQty: (state: IArticlesInitialState, action: PayloadAction<number>) => {
      state.articlesQty = action.payload;
    },
  },
});

export const { setArticles, setArticleQty } = articleSlice.actions;
export const articleReducer = articleSlice.reducer;

export { type IArticle };
