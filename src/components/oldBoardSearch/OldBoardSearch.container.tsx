import _ from "lodash";
import OldBoardSearchUI from "./OldBoardSearch.presenter";

interface ISearch {
  refetch?: any;
  onChangeWord: (value) => void;
}

export default function OldBoardSearch(props: ISearch) {
  const getDebounce = _.debounce((search) => {
    // 페이지가 여러개 나옴
    props.refetch({ search, page: 1 });
    props.onChangeWord(search);
  }, 1000);

  const onChangeSearch = (event: any) => {
    getDebounce(event.target.value);
  };

  return <OldBoardSearchUI onChangeSearch={onChangeSearch} />;
}
