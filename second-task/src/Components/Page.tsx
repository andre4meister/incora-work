import { FC } from "react";
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
      className={classNames('page-item', {
        'active': activePage === page
      })}
      onClick={() => onChangePage(page)}>
        <span className="page-link">{page}</span>
    </li>
  );
};

export default Page;
