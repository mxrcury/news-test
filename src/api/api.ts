import { IArticle } from "../redux/slices/articleSlice";
import axios from "axios";

type GetArticlesResponse = Array<IArticle>;
type GetArticleByIdResponse = IArticle;

const getArticles = async (): Promise<Array<IArticle>> => {
  const articlesQty = 100;
  const articles = await axios.get<GetArticlesResponse>(
    `https://api.spaceflightnewsapi.net/v3/articles?_limit=${articlesQty}`
  );
  return articles.data;
};

const getArticleById = async (id: number): Promise<IArticle> => {
  const article = await axios.get<GetArticleByIdResponse>(`https://api.spaceflightnewsapi.net/v3/articles/${id}`);
  return article.data;
};

export { getArticles, getArticleById };
