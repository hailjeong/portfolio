import * as S from './OpenapiList.styles'

interface IOpenapiListUI {
  imgUri: string[]
}

export default function OpenapiListUI(props: IOpenapiListUI) {
  return (
    <S.Wrapper>
      <S.Img>
        {props.imgUri.map((el, index) => (
          <>
            <S.Dog key={el} src={el} />
            {(index + 1) % 3 === 0 && <br/>}
          </>
        ))}
      </S.Img>
    </S.Wrapper>
  )
}
