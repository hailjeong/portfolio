import _ from 'lodash'
import SearchUI from "./Search.presenter";


interface ISearch {
  refetch?: any
  refetchCount?: any
  onChangeWord: (value) => void
}

export default function Search(props: ISearch) {

  const getDebounce = _.debounce((search) => {
    // 페이지가 여러개 나옴
    props.refetch({ search, page: 1});
    props.refetchCount({search})
    props.onChangeWord(search)
  }, 1000)

  const onChangeSearch = (event: any) => {
    getDebounce(event.target.value)
  }

  


  return <SearchUI
  onChangeSearch={onChangeSearch}
  />
}
