import { FC } from "react";
import Page from "./Page";
import classNames from "classnames";

export interface PaginationProps {
  activePage?: number;
  totalItems: number;
  perPage: number;
  withActions?: boolean;
  classes?: {
    btn?: string;
    activeBtn?: string;
  };
  onChangePage: (newPage: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  activePage = 1,
  perPage,
  totalItems,
  onChangePage,
  classes = { btn: "btn", activeBtn: "activeBtn" },
  withActions = true
}) => {
  const arrayNumber: number[] = [];
  for (let i = 1; i <= Math.ceil(totalItems / perPage); i++) {
    arrayNumber.push(i);
  }

  const numbersForUl = arrayNumber.map((page) => (
    <Page page={page} key={page} activePage={activePage} classes={classes} onChangePage={onChangePage} />
  ));

  return (
    <ul className='justify-content-center pagination'>
      <li className={classNames("page-item",
          {
            'disabled': !(withActions && activePage > 1)
          }
      )} onClick={() => onChangePage(activePage - 1)}>
        <span className="page-link">Previous</span>
      </li>
      {numbersForUl}
        <li className={classNames("page-item",
            {
              'disabled': !(withActions && activePage < totalItems / perPage)
            }
        )} onClick={() => onChangePage(activePage + 1)}>
          <span className="page-link">Next</span>
        </li>
    </ul>
  );
};

export default Pagination;
