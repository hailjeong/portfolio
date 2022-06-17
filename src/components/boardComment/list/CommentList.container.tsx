import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import CommentListUI from "./CommentList.presenter";
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS, UPDATE_BOARD_COMMENT } from "./CommentList.queries";

export default function CommentList() {
  const router = useRouter()

  const [contents, setContents] = useState("")
  const [rating, setRating] = useState(0)
  const [isOpen, setIsOpen] = useState("")

  const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.id }
  })

  const loadFunc = () => {
    if(!data) return;
    fetchMore({
      variables:{page: Math.ceil(data?.fetchBoardComments.length / 10) + 1}, 
      updateQuery: (prev, {fetchMoreResult}) => {
        if(!fetchMoreResult.fetchBoardComments)
        return {fetchBoardComments: [...prev.fetchBoardComments]}
        
        return {
          fetchBoardComments: [...prev.fetchBoardComments, ...fetchMoreResult.fetchBoardComments]
        }
      }
    })
  }
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT)
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT)

  const onClickDelete = async(event) => {
    const password = prompt("비밀번호를 입력하세요!")
    await deleteBoardComment({
      variables:{
        password,
        boardCommentId: (event.currentTarget.id)
      },
      refetchQueries:[
        {
          query: FETCH_BOARD_COMMENTS,
          variables: { boardId: router.query.id }
        }
      ]
    }) 
  }

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value)
  }
  const onChangeRating = (value) => {
    setRating(value)
  }

  const onClickFinalEdit = (event: MouseEvent<HTMLButtonElement>) => {
    setIsOpen(isOpen === "" ? event.currentTarget.id : "")
  }

  const onClickCancel = (event: MouseEvent<HTMLButtonElement>) => {
    setIsOpen(isOpen === "" ? event.currentTarget.id : "")
  }
  
  const onClickEdit = async(event: MouseEvent<HTMLButtonElement>) => {
    const password = prompt("비밀번호를 입력하세요!")
    await updateBoardComment({
      variables:{
        password,
        boardCommentId: (event.currentTarget.id),
        updateBoardCommentInput: {
          contents,
          rating,
        },
      },
      refetchQueries:[
        {
          query: FETCH_BOARD_COMMENTS,
          variables: {boardId: router.query.id}
        }
      ]
    })
    setIsOpen("")
  }
  return <CommentListUI
  onChangeContents={onChangeContents}
  onChangeRating={onChangeRating}
  onClickDelete={onClickDelete}
  onClickFinalEdit={onClickFinalEdit}
  onClickCancel={onClickCancel}
  onClickEdit={onClickEdit}
  data={data}
  isOpen={isOpen}
  loadFunc={loadFunc}
  />
}
