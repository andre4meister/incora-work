import { FC } from "react";
import Page from "./Page";

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
    <ul className='flex-ul'>
      {withActions && activePage > 1 && <li onClick={() => onChangePage(activePage - 1)}>Previous</li>}
      {numbersForUl}
      {withActions && activePage < totalItems / perPage && <li onClick={() => onChangePage(activePage + 1)}>Next</li>}
    </ul>
  );
};

export default Pagination;
