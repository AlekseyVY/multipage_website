import {ButtonContainerDark, ButtonContainerLight, TextStyle} from "./styles";


const Button = ({isLight = false, text= 'LEARN MORE'}) => {
  return (
    <>
      {
        isLight ?
          <ButtonContainerLight>
            <TextStyle>
              {text}
            </TextStyle>
          </ButtonContainerLight>
          :
          <ButtonContainerDark>
            <TextStyle>
              {text}
            </TextStyle>
          </ButtonContainerDark>
      }
    </>
  )
}


export default Button;