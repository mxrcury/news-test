import { IArticle } from "../../redux/slices/articleSlice";

export const initialArticleState: IArticle = {
  summary: "",
  title: "",
  imageUrl: "",
  id: 0,
  events: [],
  url: "",
  newsSite: "",
  publishedAt: "",
  updatedAt: "",
  featured: false,
  launches: [],
};
