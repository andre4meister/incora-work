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

const Pagination: FC<PaginationProps> = ({ activePage, perPage, totalItems, onChangePage, classes, withActions }) => {
  const realActivePage: number = activePage !== undefined ? activePage : 1;
  const arrayNumber: number[] = [];
  for (let i = 1; i <= Math.ceil(totalItems / perPage); i++) {
    arrayNumber.push(i);
  }
  const numbersForUl = arrayNumber.map((page) => (
    <Page page={page} key={page} activePage={activePage} classes={classes} onChangePage={onChangePage} />
  ));

  return (
    <ul className='flex-ul'>
      {withActions && realActivePage > 1 && <li onClick={() => onChangePage(realActivePage - 1)}>Previous</li>}
      {numbersForUl}
      {withActions && realActivePage < totalItems / perPage && (
        <li onClick={() => onChangePage(realActivePage + 1)}>Next</li>
      )}
    </ul>
  );
};

export default Pagination;
