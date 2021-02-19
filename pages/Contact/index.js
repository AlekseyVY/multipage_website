import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import {
  ContactFormContainer, ContactFormLeft, ContactFormRight, ContactFormSecText, FooterWrapper, HWrapper,
  MainContainer
} from "../../styles/contact/styles";
import LocationSection from "../../common/LocationSection/LocationSection";
import ContactForm from "../../common/ContactForm/ContactForm";


export default function Contact(){
  return (
    <MainContainer>
      <Header />
      <ContactFormContainer>
        <ContactFormLeft>
          <div>
            <HWrapper>
              Contact Us
            </HWrapper>
          </div>
          <ContactFormSecText>
            Ready to take it to the next level? Let’s talk about your project or idea and find out how we can
            help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
          </ContactFormSecText>
          <div>
          </div>
        </ContactFormLeft>
        <ContactFormRight>
          <ContactForm />
        </ContactFormRight>
      </ContactFormContainer>
        <LocationSection />
        <FooterWrapper>
          <Footer top={false}/>
        </FooterWrapper>
    </MainContainer>
  )
}