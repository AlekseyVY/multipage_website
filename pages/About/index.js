import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import {
  HeroContainer,
  HeroImage,
  HeroInnerLeft,
  HeroInnerRight,
  HeroMainText,
  HeroSecondText,
  InnerPromoTextContainer,
  MainContainer,
  PromoBlockContainer,
  PromoBlockContainerDown,
  PromoImage, PromoImageTwo,
  PromoMainText, PromoSecondText,
  RightInnerPromoContainer
} from "../../styles/about/styles";
import LocationSection from "../../common/LocationSection/LocationSection";
const heroIcon  = 'image-about-hero.jpg'
const promoPic = 'image-world-class-talent.jpg'
const PromoPicTwo = 'image-real-deal.jpg'


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
          <HeroImage image={heroIcon}/>
        </HeroInnerRight>
      </HeroContainer>
      <PromoBlockContainer>
        <div>
          <PromoImage image={promoPic} />
        </div>
        <RightInnerPromoContainer>
          <InnerPromoTextContainer>
            <div>
              <PromoMainText>World-class talent</PromoMainText>
            </div>
            <PromoSecondText>
              We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.
              <br />
              <br />
              Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important.
              We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality
              outcomes that encapsulates their brand’s story and mission.
            </PromoSecondText>
          </InnerPromoTextContainer>
        </RightInnerPromoContainer>
      </PromoBlockContainer>
      <LocationSection />
      <PromoBlockContainerDown>
        <div>
          <PromoImageTwo image={PromoPicTwo} />
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
