import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button01 from "../commons/button/01";
import Input01 from "../commons/input/01";
import * as S from "./SignUp.styles";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 아닙니다.")
    .required("필수 입력 사항입니다!"),
  name: yup.string().required("필수 입력 사항입니다!"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-zA-z])(?=.*\d)(?=.*[$@#!~%^&*])[a-zA-Z\d$@#!~%^&*]{8,15}$/,
      "비밀번호는 8 ~ 15자 이며 영문, 숫자, 특수문자를 포함해야 합니다."
    )
    .required("필수 입력 사항입니다!"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호를 확인해주세요!"),
});

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      email
      name
    }
  }
`;
export default function SignUpUI() {
  const router = useRouter();

  const [createUser] = useMutation(CREATE_USER);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = async (data) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            name: data.name,
            password: data.password,
          },
        },
      });
      router.push(`/boards/login`);
      alert("회원가입에 성공 했습니다. 로그인 후 이용해주세요~");
    } catch (error) {
      alert("회원가입에 실패했습니다. 다시 해주세요~");
    }
  };

  return (
    <S.Wrapper onSubmit={handleSubmit(onClickSubmit)}>
      <S.TitleWrapper>
        <S.Title>회원가입</S.Title>
      </S.TitleWrapper>

      <S.BodyWrapper>
        <S.InputsWrapper>
          <S.Label>이메일</S.Label>
          <Input01 type="text" register={register("email")} />
          <S.Error>{formState.errors.email?.message} </S.Error>
        </S.InputsWrapper>
        <S.InputsWrapper>
          <S.Label>이름</S.Label>
          <Input01 type="text" register={register("name")} />
          <S.Error>{formState.errors.name?.message} </S.Error>
        </S.InputsWrapper>
        <S.InputsWrapper>
          <S.Label>비밀번호</S.Label>
          <Input01 type="Password" register={register("password")} />
          <S.Error>{formState.errors.password?.message} </S.Error>
        </S.InputsWrapper>
        <S.InputsWrapper>
          <S.Label>비밀번호 확인</S.Label>
          <Input01 type="Password" register={register("passwordConfirm")} />
          <S.Error>{formState.errors.passwordConfirm?.message} </S.Error>
        </S.InputsWrapper>
      </S.BodyWrapper>

      <S.Button>
        <Button01 isActive={formState.isValid} title="회원가입하기" />
      </S.Button>
    </S.Wrapper>
  );
}
