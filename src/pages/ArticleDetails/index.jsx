import { useParams } from "react-router-dom";
import MyNavbar from "../../components/common/Navbar";
import ArticleMainContent from "../../components/articleDetails/ArticleMainContent";

function ArticleDetails() {
  const { id } = useParams();
  

//   if (data) {
//     console.log(data.data.detailsNewsDto);
//   }

  return (
    <>
      <MyNavbar />
      <ArticleMainContent />
    </>
  );
}

export default ArticleDetails;
