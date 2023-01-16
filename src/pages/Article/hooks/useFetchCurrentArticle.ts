import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticleById } from "../../../api/api";
import { IArticle } from "../../../redux/slices/articleSlice";
import { initialArticleState } from "../data";

interface IuseFetchCurrentArticle {
  currentArticle: IArticle;
}

export const useFetchCurrentArticle = (): IuseFetchCurrentArticle => {
  const [currentArticle, setCurrentArticle] = useState<IArticle>(initialArticleState);
  const { id: articleId } = useParams();
  useEffect(() => {
    async function fetchArticle() {
      if (articleId) {
        const article = await getArticleById(+articleId);
        setCurrentArticle(article);
      }
    }
    fetchArticle();
  }, []);
  return { currentArticle };
};
