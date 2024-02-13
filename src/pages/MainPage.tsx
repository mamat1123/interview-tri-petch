import ArticleSection from "../components/ArticleSection";
import { mockArticle } from "../constants/mockData";

function MainPageDesktop() {
  return (
    <>
      <div className="flex flex-col">
        <ArticleSection articleList={mockArticle} />
      </div>
    </>
  );
}

export default MainPageDesktop;
