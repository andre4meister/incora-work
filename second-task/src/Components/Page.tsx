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
  return (
    <li
      className={classNames("default", activePage === page ? classes?.activeBtn : classes?.btn)}
      onClick={() => onChangePage(page)}>
      {page}
    </li>
  );
};

export default Page;
