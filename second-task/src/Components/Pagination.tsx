import { FC, useEffect } from "react";
import Page from "./Page";
import classNames from "classnames";
import { usePagination } from "../hooks/hooks";
import { PagintaionDataType } from "./App";
export interface PaginationProps {
  totalItems: number;
  perPage: number;
  setPaginationData: (data: PagintaionDataType) => void;
  withActions?: boolean;
  classes?: {
    btn?: string;
    activeBtn?: string;
  };
}

const Pagination: FC<PaginationProps> = ({
  setPaginationData,
  perPage,
  totalItems,
  classes = { btn: "btn", activeBtn: "activeBtn" },
  withActions = true
}) => {
  const { activePage, setActivePage, nextPage, prevPage } = usePagination(1);

  useEffect(() => {
    setPaginationData({ activePage, perPage });
  }, [activePage, perPage]);

  const arrayNumber: number[] = [];
  for (let i = 1; i <= Math.ceil(totalItems / perPage); i++) {
    arrayNumber.push(i);
  }

  const numbersForUl = arrayNumber.map((page) => (
    <Page page={page} key={page} activePage={activePage} classes={classes} onChangePage={setActivePage} />
  ));

  return (
    <ul className='justify-content-center pagination'>
      <li
        className={classNames("page-item", {
          disabled: !(withActions && activePage > 1)
        })}>
        <button className='page-link' disabled={!(withActions && activePage > 1)} onClick={() => prevPage()}>
          Previous
        </button>
      </li>
      {numbersForUl}
      <li
        className={classNames("page-item", {
          disabled: !(withActions && activePage < totalItems / perPage)
        })}>
        <button
          disabled={!(withActions && activePage < totalItems / perPage)}
          onClick={() => nextPage()}
          className='page-link'>
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
