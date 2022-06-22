import { useRouter } from "next/router";
import { useState } from "react";
import ChargeUI from "./Charge.presenter";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function Charge() {
  const router = useRouter();
  const [value, setValue] = useState(0);

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const onChangePrice = (event) => {
    setValue(event.target.value);
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {};

  const handleCancel = () => {
    setVisible(false);
  };

  const requestPay = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "노르웨이 회전 의자",
        amount: value,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/28-01-payment",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          console.log(rsp);
          // ...,
          // 결제 성공 시 로직,
          // ...

          // 백엔드에 결제관련 데이터 넘겨주기 (=> 즉, 뮤테이션 실행하기)
          // ex) createPointTransactionOfLoading
          router.push(`/oldboards`);
        } else {
          // ...,
          // 결제 실패 시 로직,
          // ...
          alert("결제에 실패했습니다. 다시 시도해 주세요!");
        }
      }
    );
  };
  return (
    <ChargeUI
      showModal={showModal}
      handleCancel={handleCancel}
      handleOk={handleOk}
      visible={visible}
      loading={loading}
      onChangePrice={onChangePrice}
      requestPay={requestPay}
    />
  );
}
