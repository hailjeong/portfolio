import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";

interface IBoardWrite {
  isEdit: boolean;
  BoardData?: any;
}

export default function BoardWrite(props: IBoardWrite) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
    youtubeUrl: "",
  });
  const [homeCode, setHomeCode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [imgUrls, setImgUrls] = useState(["", "", ""]);

  // const [writer, setWriter] = useState("")
  // const [password, setPassword] = useState("")
  // const [title, setTitle] = useState("")
  // const [contents, setContents] = useState("")
  // const [youtubeUrl, setYoutubeUrl] = useState("")

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onChangeInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
    if (inputs.writer !== "") {
      setWriterError("");
    }
    if (inputs.password !== "") {
      setPasswordError("");
    }
    if (inputs.title !== "") {
      setTitleError("");
    }
    if (inputs.contents !== "") {
      setContentsError("");
    }
  };

  const onChangeAddressDetail = (event) => {
    setAddressDetail(event.target.value);
  };
  const onClickSearchAddress = () => {
    setIsOpen((prev) => !prev);
  };
  const onCompleteAddress = (data: any) => {
    setHomeCode(data.zonecode);
    setAddress(data.address);
    setIsOpen(false);
  };

  const onChangeImgUrls = (fileUrl: string, index: number) => {
    const newImgUrls = [...imgUrls];
    newImgUrls[index] = fileUrl;
    setImgUrls(newImgUrls);
  };

  const onClickSubmit = async () => {
    if (!inputs.writer) {
      setWriterError("작성자를 입력하세요");
    }
    if (!inputs.password) {
      setPasswordError("비밀번호를 입력하세요");
    }
    if (!inputs.title) {
      setTitleError("제목을 입력하세요");
    }
    if (!inputs.contents) {
      setContentsError("내용을 입력하세요");
    }
    if (inputs.writer && inputs.password && inputs.title && inputs.contents) {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            // writer,
            // password,
            // title,
            // contents,
            // youtubeUrl,
            ...inputs,
            boardAddress: {
              zipcode: homeCode,
              address,
              addressDetail,
            },
            images: imgUrls,
          },
        },
      });
      console.log(result);
      alert("게시물이 등록 되었습니다.");
      router.push(`/boards/${result.data.createBoard._id}`);
    }
  };

  const onClickEdit = async () => {
    const currentFiles = JSON.stringify(imgUrls);
    const defaultFiles = JSON.stringify(props.BoardData.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    if (!inputs.title && !inputs.contents && inputs.youtubeUrl) {
      alert("수정한 내용이 없습니다.");
      return;
    }
    if (!inputs.password) {
      alert("비밀번호를 입력해주세요.");
    }

    interface IMyvariables {
      boardId: string | string[];
      password: string;
      updateBoardInput: {
        title: string;
        contents: string;
        youtubeUrl: string;
        boardAddress?: {
          zipcode?: String;
          address?: String;
          addressDetail?: String;
        };
        images?: String[];
      };
    }

    const myvariables: IMyvariables = {
      boardId: router.query.id,
      password: inputs.password,
      updateBoardInput: {
        title: inputs.title,
        contents: inputs.contents,
        youtubeUrl: inputs.youtubeUrl,
        boardAddress: {
          zipcode: homeCode,
          address,
          addressDetail,
        },
        images: imgUrls,
      },
    };

    if (inputs.title) myvariables.updateBoardInput.title = inputs.title;
    if (inputs.contents)
      myvariables.updateBoardInput.contents = inputs.contents;
    if (inputs.youtubeUrl)
      myvariables.updateBoardInput.youtubeUrl = inputs.youtubeUrl;
    if (homeCode || address || addressDetail) {
      myvariables.updateBoardInput.boardAddress = {};
      if (homeCode)
        myvariables.updateBoardInput.boardAddress.zipcode = homeCode;
      if (address) myvariables.updateBoardInput.boardAddress.address = address;
      if (addressDetail)
        myvariables.updateBoardInput.boardAddress.addressDetail = addressDetail;
    }
    if (isChangedFiles) myvariables.updateBoardInput.images = imgUrls;

    // if(isChangedFiles) myvariables.updateBoardInput.images= fileUrls;
    await updateBoard({
      variables: myvariables,
    });
    alert("게시물 수정이 되었습니다.");
    router.push(`/boards/${router.query.id}`);
  };

  useEffect(() => {
    if (props.BoardData?.fetchBoard.images?.length) {
      setImgUrls([...props.BoardData?.fetchBoard.images]);
    }
  }, [props.BoardData]);

  return (
    <BoardWriteUI
      // onChangeWriter={onChangeWriter}
      // onChangePassword={onChangePassword}
      // onChangeTitle={onChangeTitle}
      // onChangeContents={onChangeContents}
      onChangeInputs={onChangeInputs}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      isEdit={props.isEdit}
      BoardData={props.BoardData}
      isOpen={isOpen}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickSearchAddress={onClickSearchAddress}
      onCompleteAddress={onCompleteAddress}
      homeCode={homeCode}
      address={address}
      addressDetail={addressDetail}
      imgUrls={imgUrls}
      onChangeImgUrls={onChangeImgUrls}
    />
  );
}
