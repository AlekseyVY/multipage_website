import {
  BottomInnerTextBlockContainer,
  BottomTextBlock, BottomTextBlockContainer,
  FooterBottomInnerContainer,
  FooterContainer,
  FooterContainerBottom, FooterContainerForNav,
  FooterContainerTop, FooterNavGroup,
  FooterNavGroupContainer, FooterNavLink,
  H2text, Separator, SocialContainer, SocialElement, Strong,
  TopLeftTextContainer
} from "./styles";
import Button from "../Button/Button";
import Image from "next/image";
import Link from "next/link";
import {NavLink} from "../Header/styles";


export default function Footer(){
  return (
    <FooterContainer>
      <FooterContainerTop>
        <TopLeftTextContainer>
          <div>
            <H2text>
              Let’s talk about your project
            </H2text>
          </div>
          <div>
            Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
          </div>
        </TopLeftTextContainer>
        <div>
          <Button isLight={true} text={'GET IN TOUCH'}/>
        </div>
      </FooterContainerTop>
      <FooterContainerBottom>
        <FooterBottomInnerContainer>
          <div>
            <FooterContainerForNav>
              <div>
                <Image
                  src={'/assets/shared/desktop/logo-light.png'}
                  alt={'logo of company'}
                  width={196}
                  height={24}
                  quality={75}
                />
              </div>
              <FooterNavGroupContainer>
                <FooterNavGroup>
                  <li>
                    <Link href={'/About'}>
                      <NavLink>OUR COMPANY</NavLink>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/Locations'}>
                      <NavLink>LOCATIONS</NavLink>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/Contact'}>
                      <NavLink>CONTACT</NavLink>
                    </Link>
                  </li>
                </FooterNavGroup>
              </FooterNavGroupContainer>
            </FooterContainerForNav>
          </div>
          <Separator/>
          <BottomTextBlockContainer>
            <BottomInnerTextBlockContainer>
              <BottomTextBlock>
                <div>
                  <Strong>
                    Designo Central Office
                  </Strong>
                </div>
                <div>
                  3886 Wellington Street
                </div>
                <div>
                  Toronto, Ontario M9C 3J5
                </div>
              </BottomTextBlock>
              <BottomTextBlock>
                <div>
                  <Strong>
                    Contact Us (Central Office)
                  </Strong>
                </div>
                <div>
                  <Strong>
                    P : +1 253-863-8967
                  </Strong>
                </div>
                <div>
                  <Strong>
                    M : contact@designo.co
                  </Strong>
                </div>
              </BottomTextBlock>
            </BottomInnerTextBlockContainer>
            <SocialContainer>
              <SocialElement>
                <Image
                  src={'/assets/shared/desktop/icon-facebook.svg'}
                  alt={'Facebook social icon'}
                  width={24}
                  height={24}
                />
              </SocialElement>
              <SocialElement>
                <Image
                  src={'/assets/shared/desktop/icon-youtube.svg'}
                  alt={'Youtube social icon'}
                  width={24}
                  height={24}
                />
              </SocialElement>
              <SocialElement>
                <Image
                  src={'/assets/shared/desktop/icon-twitter.svg'}
                  alt={'Twitter social icon'}
                  width={24}
                  height={24}
                />
              </SocialElement>
              <SocialElement>
                <Image
                  src={'/assets/shared/desktop/icon-pinterest.svg'}
                  alt={'Pinterest social icon'}
                  width={24}
                  height={24}
                />
              </SocialElement>
              <SocialElement>
                <Image
                  src={'/assets/shared/desktop/icon-instagram.svg'}
                  alt={'Instagram social icon'}
                  width={24}
                  height={24}
                />
              </SocialElement>
            </SocialContainer>
          </BottomTextBlockContainer>
        </FooterBottomInnerContainer>
      </FooterContainerBottom>
    </FooterContainer>
  )
}