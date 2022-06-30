import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import OldBoardWriteUI from "./OldBoardWrite.presenter";
import { CREATE_USEDITEM, UPDATE_USEDITEM } from "./OldBoardWrite.queries";
import * as yup from "yup";
import { Modal } from "antd";
import { useEffect, useState } from "react";

interface IOldBoardWrite {
  isEdit: boolean;
  itemdata?: any;
}

declare const window: typeof globalThis & {
  kakao: any;
};

const schema = yup.object({
  name: yup.string().required("필수 입력 사항입니다."),
  remarks: yup.string().required("필수 입력 사항입니다."),
  contents: yup.string().required("필수 입력 사항입니다."),
  price: yup.number().required("필수 입력 사항입니다."),
});

export default function OldBoardWrite(props: IOldBoardWrite) {
  const router = useRouter();

  const [imgUrls, setImgUrls] = useState(["", "", ""]);
  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const [updateUseditem] = useMutation(UPDATE_USEDITEM);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onChangeImgUrls = (fileUrl: string, index: number) => {
    const newImgUrls = [...imgUrls];
    newImgUrls[index] = fileUrl;
    setImgUrls(newImgUrls);
  };

  const onChangeContents = (value: string) => {
    // register로 등록하지 않고, 강제로 값을 넣어주는 기능!
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onChange 됐다고 react-hook-form에 알려주는 기능!
    trigger("contents");
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=60f41832d3a252ba8f706fab1b304c1d&autoload=false&libraries=services,clusterer,drawing";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.504449, 127.04886), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        const geocoder = new window.kakao.maps.services.Geocoder();
        const marker = new window.kakao.maps.Marker(); // 클릭한 위치를 표시할 마커입니다
        const infowindow = new window.kakao.maps.InfoWindow({ zindex: 1 }); // 클릭한 위치에 대한 주소를 표시할 인포윈도우입니다

        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent) {
            searchDetailAddrFromCoords(
              mouseEvent.latLng,
              function (result, status) {
                if (status === window.kakao.maps.services.Status.OK) {
                  const detailAddr = !result[0].road_address
                    ? "<div>지번 주소 : " +
                      result[0].address.address_name +
                      "</div>"
                    : "";

                  const content =
                    '<div class="bAddr">' +
                    '<span class="title">누르신 위치입니다.</span>' +
                    detailAddr +
                    "</div>";

                  // 마커를 클릭한 위치에 표시합니다
                  marker.setPosition(mouseEvent.latLng);
                  marker.setMap(map);

                  // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
                  infowindow.setContent(content);
                  infowindow.open(map, marker);
                }
              }
            );
          }
        );
        function searchDetailAddrFromCoords(coords, callback) {
          // 좌표로 법정동 상세 주소 정보를 요청합니다
          geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
          console.log("coords", coords);
          setLat(coords.Ma);
          setLng(coords.La);
        }
      });
    };
  }, [lat, lng]);

  const onClickSubmit = async (data) => {
    console.log(data);
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...data,
            images: imgUrls,
            useditemAddress: {
              lat,
              lng,
            },
          },
        },
      });
      alert("중고거래 게시판에 글이 작성 완료되었습니다.");
      router.push(`/oldboards/boards/${result.data.createUseditem._id}`);
    } catch (error) {
      alert("죄송합니다. 다시 한 번 시도해주세요!");
    }
  };

  useEffect(() => {
    setLat(props.itemdata?.fetchUseditem.useditemAddress.lat || 0);
  }, [props.itemdata?.fetchUseditem.useditemAddress.lat]);

  useEffect(() => {
    setLng(props.itemdata?.fetchUseditem.useditemAddress.lng || 0);
  }, [props.itemdata?.fetchUseditem.useditemAddress.lng]);

  const onClickEdit = async (data) => {
    // try {
    const currentFiles = JSON.stringify(imgUrls);
    const defaultFiles = JSON.stringify(props.itemdata.fetchUseditem.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    const updateUseditemInput: any = {};
    if (isChangedFiles) updateUseditemInput.images = imgUrls;

    await updateUseditem({
      variables: {
        useditemId: router.query.id,
        updateUseditemInput: {
          ...data,
          images: imgUrls,
          useditemAddress: {
            lat,
            lng,
          },
        },
      },
    });
    Modal.success({ content: "게시물 수정이 성공적으로 이루어졌습니다!" });
    router.push(`/oldboards/boards/${router.query.id}`);
    // } catch (error) {
    //   Modal.error({ content: "게시물 수정에 실패했습니다!" });
    // }
  };

  useEffect(() => {
    if (props.itemdata?.fetchUseditem.images?.length) {
      setImgUrls([...props.itemdata?.fetchUseditem.images]);
    }
  }, [props.itemdata]);

  return (
    <OldBoardWriteUI
      isEdit={props.isEdit}
      itemdata={props.itemdata}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
      onChangeContents={onChangeContents}
      onClickEdit={onClickEdit}
      onChangeImgUrls={onChangeImgUrls}
      imgUrls={imgUrls}
      lat={lat}
      lng={lng}
    />
  );
}
