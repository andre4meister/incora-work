import { FC } from "react";
import "../Styles/App.css";
import classNames from "classnames";

interface IPage {
  page: number;
  activePage: number | undefined;
  onChangePage: (newPage: number) => void;
  classes?: {
    btn?: string;
    activeBtn?: string;
  };
}

const Page: FC<IPage> = ({ page, onChangePage, activePage, classes }) => {
  console.log(classes);
  return (
    <li
      className={classNames(activePage === page ? classes?.activeBtn : classes?.btn, "paginator-btn")}
      onClick={() => onChangePage(page)}>
      {page}
    </li>
  );
};

export default Page;
