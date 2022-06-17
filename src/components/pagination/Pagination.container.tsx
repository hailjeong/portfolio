import { useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import { FETCH_BOARDS } from "../board/list/BoardList.queries";
import PaginationUI from "./Pagination.presenter";

interface IPagination {
  refetch?: any
  count?: number
}

export default function Pagination(props: IPagination) {
  const [startPage, setStartPage] = useState(1)
  const [isActivePage, setIsActivePage] = useState(1)
  
  const { data } = useQuery(FETCH_BOARDS, {
    variables: {page: startPage}
  })


  const lastPage = props.count ? Math.ceil(props.count / 10) : 0;
  //  한 화면에 보여줄 갯수에서 구한 하단 총 갯수

  const onClickPrev = () => {
    if(startPage <= 1) return;
    setStartPage((prev) => prev - 10)
    setIsActivePage(startPage - 10)
    props.refetch({page: startPage - 10})
  }

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if(!(event.target instanceof Element)) return;
    const isActivePage = Number(event.target.id)
    setIsActivePage(isActivePage)
    props.refetch({page: isActivePage})
  }

  const onClickNext = () => {
    if(startPage + 10 >= lastPage) return 
    setStartPage((prev) => prev + 10)
    setIsActivePage(startPage + 10)
    props.refetch({page: startPage + 10})
  }


  return <PaginationUI
  onClickPrev={onClickPrev}
  onClickPage={onClickPage}
  onClickNext={onClickNext}
  startPage={startPage}
  lastPage={lastPage}
  isActivePage={isActivePage}
  data={data}
  />
}

