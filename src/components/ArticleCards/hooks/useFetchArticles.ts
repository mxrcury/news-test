import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getArticles } from "../../../api/api";
import { useSelector } from "../../../redux/hooks";
import { IArticle, setArticles } from "../../../redux/slices/articleSlice";

interface IuseFetchArticles {
  articles: Array<IArticle>;
  articlesQty: number;
}

export const useFetchArticles = (): IuseFetchArticles => {
  const dispatch = useDispatch();
  const { article } = useSelector((state) => state);

  useEffect(() => {
    async function fetchArticles(): Promise<void> {
      const articles = await getArticles();
      dispatch(setArticles(articles));
    }
    fetchArticles();
  }, []);
  return { articles: article.articleList, articlesQty: article.articlesQty };
};
