import { useState } from "react";

export const usePagination = (initialPage: number) => {
  const [activePage, setActivePage] = useState<number>(1);
  const nextPage = () => {
    setActivePage(activePage + 1);
  };
  const prevPage = () => {
    setActivePage(activePage - 1);
  };
  return {
    activePage,
    setActivePage,
    nextPage,
    prevPage
  };
};
