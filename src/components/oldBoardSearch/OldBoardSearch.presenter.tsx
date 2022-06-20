interface ISearchUI {
  onChangeSearch: (event: any) => void;
}

export default function OldBoardSearchUI(props: ISearchUI) {
  return (
    <div>
      검색어 입력: <input type="text" onChange={props.onChangeSearch} />
    </div>
  );
}
