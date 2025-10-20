import "./TopBarSection.css";
import { useTranslation } from "react-i18next";

export default function TopBarSection({ mainTitle, subTitle }) {
  const { t } = useTranslation();

  return (
    <>
      <div className="section-container">
        <h1 className="title">{t(mainTitle)}</h1>
      </div>
      <div className="title-container">
        <h1 className="title">{t(subTitle)}</h1>
      </div>
    </>
  );
}
