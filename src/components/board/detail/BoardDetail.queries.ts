import { gql } from "@apollo/client";

export const FETCH_BOARD= gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      createdAt
      boardAddress {
        zipcode
        address
        addressDetail
      }
      images
    }
  }
`
export const LIKEBOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId) 
  }
`
export const DISLIKEBOARD = gql`
  mutation dislikeBoard($boardId: ID!){
    dislikeBoard(boardId: $boardId)
  }
`

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!){
    deleteBoard(boardId: $boardId)
  }
`