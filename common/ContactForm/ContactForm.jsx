import {
  AreaInnerWrapper, ButtonWrapper,
  FormContainer,
  FormInnerContainer,
  InputInnerWrapper,
  InputWrapper,
  LabelWrapper
} from "./styles";
import Button from "../Button/Button";


const ContactForm = () => {

  return (
    <FormContainer>
      <FormInnerContainer>
        <InputWrapper>
          <LabelWrapper>
            <label>
              Name
            </label>
          </LabelWrapper>
            <InputInnerWrapper />
        </InputWrapper>
        <InputWrapper>
          <LabelWrapper>
            <label>
              Email Address
            </label>
          </LabelWrapper>
          <InputInnerWrapper />
        </InputWrapper>
        <InputWrapper>
          <LabelWrapper>
            <label>
              Phone
            </label>
          </LabelWrapper>
          <InputInnerWrapper />
        </InputWrapper>
        <InputWrapper>
          <LabelWrapper>
            <label>
              Your Message
            </label>
          </LabelWrapper>
          <AreaInnerWrapper />
        </InputWrapper>
        <ButtonWrapper>
          <Button isLight={true} text={'SUBMIT'}/>
        </ButtonWrapper>
      </FormInnerContainer>
    </FormContainer>
  )
}


export default ContactForm;