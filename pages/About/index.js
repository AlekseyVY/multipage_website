import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import {
  Circle,
  HeroContainer,
  HeroImage,
  HeroInnerLeft,
  HeroInnerRight,
  HeroMainText,
  HeroSecondText,
  ImageContainer,
  InnerPromoTextContainer,
  LocationCardContainer,
  LocationContainer,
  MainContainer,
  PromoBlockContainer,
  PromoBlockContainerDown,
  PromoImage, PromoImageTwo,
  PromoMainText,
  RightInnerPromoContainer
} from "../../styles/about/styles";
import Button from "../../common/Button/Button";
const heroIcon  = '/assets/about/desktop/image-about-hero.jpg'
const promoPic = '/assets/about/desktop/image-world-class-talent.jpg'
const PromoPicTwo = '/assets/about/desktop/image-real-deal.jpg'
const canada = '/assets/shared/desktop/illustration-canada.svg'
const australia = '/assets/shared/desktop/illustration-australia.svg'
const uk = '/assets/shared/desktop/illustration-united-kingdom.svg'

export default function About() {
  return(
    <MainContainer>
      <Header />
      <HeroContainer>
        <HeroInnerLeft>
          <HeroMainText>
            <h1>
              About us
            </h1>
          </HeroMainText>
          <HeroSecondText>
            Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands,
            products, and digital experiences that connect with our clients’ audiences.
          </HeroSecondText>
        </HeroInnerLeft>
        <HeroInnerRight>
          <HeroImage src={heroIcon} alt={'Hero icon'}/>
        </HeroInnerRight>
      </HeroContainer>
      <PromoBlockContainer>
        <div>
          <PromoImage src={promoPic} alt={'Promo Icon'}/>
        </div>
        <RightInnerPromoContainer>
          <InnerPromoTextContainer>
            <div>
              <PromoMainText>World-class talent</PromoMainText>
            </div>
            <div>
              We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.
              <br />
              <br />
              Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important.
              We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality
              outcomes that encapsulates their brand’s story and mission.
            </div>
          </InnerPromoTextContainer>
        </RightInnerPromoContainer>
      </PromoBlockContainer>
      <LocationContainer>
        <LocationCardContainer>
          <ImageContainer>
            <img src={canada} alt={'canada icon'}/>
            <Circle deg={'0deg'}/>
          </ImageContainer>
          <div>
            <h3>
              CANADA
            </h3>
          </div>
          <div>
            <Button isLight={false} text={'SEE LOCATION'}/>
          </div>
        </LocationCardContainer>
        <LocationCardContainer>
          <ImageContainer>
            <img src={australia} alt={'australia icon'}/>
            <Circle deg={'270deg'}/>
          </ImageContainer>
          <div>
            <h3>
              AUSTRALIA
            </h3>
          </div>
          <div>
            <Button isLight={false} text={'SEE LOCATION'}/>
          </div>
        </LocationCardContainer>
        <LocationCardContainer>
          <ImageContainer>
            <img src={uk} alt={'UK icon'}/>
            <Circle deg={'180deg'}/>
          </ImageContainer>
          <div>
            <h3>
              UNITED KINGDOM
            </h3>
          </div>
          <div>
            <Button isLight={false} text={'SEE LOCATION'}/>
          </div>
        </LocationCardContainer>
      </LocationContainer>
      <PromoBlockContainerDown>
        <div>
          <PromoImageTwo src={PromoPicTwo} alt={'Promo Icon'}/>
        </div>
        <RightInnerPromoContainer>
          <InnerPromoTextContainer>
            <div>
              <PromoMainText>The real deal</PromoMainText>
            </div>
            <div>
              As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
              Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to
              every opportunity. We make design and technology more accessible and give you tools to measure success.
              <br />
              <br />
              We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies,
              we inspire audiences to take action and drive real results.
            </div>
          </InnerPromoTextContainer>
        </RightInnerPromoContainer>
      </PromoBlockContainerDown>
      <Footer />
    </MainContainer>
  )
}
