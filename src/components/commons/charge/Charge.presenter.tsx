import { Button, Modal } from "antd";
import * as S from "./Charge.styles";
import Head from "next/head";

interface IChargeUI {
  visible: boolean;
  loading: boolean;
  showModal: () => void;
  handleOk: () => void;
  handleCancel: () => void;
  onChangePrice: (event) => void;
  requestPay: () => void;
}
export default function ChargeUI(props: IChargeUI) {
  return (
    <>
      <Button type="primary" onClick={props.showModal}>
        충전하기
      </Button>
      {props.visible && (
        <Modal
          visible={true}
          title="Title"
          onOk={props.requestPay}
          onCancel={props.handleCancel}
          footer={[
            <Button key="back" onClick={props.handleCancel}>
              취소
            </Button>,
            <S.ButtonWraaper key="">
              <S.Button onClick={props.requestPay}>충전하기</S.Button>
            </S.ButtonWraaper>,
          ]}
        >
          <Head>
            {/* <!-- jQuery --> */}
            <script
              type="text/javascript"
              src="https://code.jquery.com/jquery-1.12.4.min.js"
            ></script>
            {/* <!-- iamport.payment.js --> */}
            <script
              type="text/javascript"
              src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
            ></script>
          </Head>
          <S.Wrapper>
            <S.Icon>
              <S.AccountBookFilledIcon />
            </S.Icon>
            <S.TitleWrapper>
              <S.Title>충전하실 금액을 선택해주세요!!</S.Title>
            </S.TitleWrapper>

            <S.SelectWrapper>
              <S.SelectPrice name="price" onChange={props.onChangePrice}>
                <S.Price value="selectbox" selected disabled>
                  충전할 금액
                </S.Price>
                <S.Price value="100">100원</S.Price>
                <S.Price value="500">500원</S.Price>
                <S.Price value="1000">1000원</S.Price>
                <S.Price value="2000">2000원</S.Price>
              </S.SelectPrice>
            </S.SelectWrapper>
          </S.Wrapper>
        </Modal>
      )}
    </>
  );
}
