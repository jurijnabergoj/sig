import NewsGrid from "../components/NewsGrid";
import "./News.css";
import TopBarSection from "./TopBarSection";

export default function News() {
  return (
    <>
    <TopBarSection mainTitle="novice.mainTitle" subTitle="novice.subTitle"/>
    <main>
      <NewsGrid />
    </main>
    </>
  );
}
