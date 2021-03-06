import {
  InnerContainer,
  LinkToProjects,
  PromoCardContainer,
  PromoH2,
  PromoText,
  RelativeContainer,
  RightArrowLink
} from "./styles";
import Link from 'next/link'

export default function PromoCardDesign({width = '54.1rem', height = '30.8rem', type = "app"}) {

  const picArr = ['image-app-design.jpg', 'image-graphic-design.jpg',
    'image-web-design.jpg', 'image-web-design-large.jpg']
  const textArr = ['WEB DESIGN', 'APP DESIGN', 'GRAPHIC DESIGN']
  let bg
  let text
  let link

  switch(type){
    case "app": {
      bg = picArr[0]
      text = textArr[1]
      link = '/AppDesign'
      break;
    }
    case "web":{
      if(height === '30.8rem'){
        bg = picArr[2]
      } else {
        bg = picArr[3]
      }
      text = textArr[0]
      link = '/WebDesign'
      break;
    }
    case "graphic": {
      bg = picArr[1]
      text = textArr[2]
      link = '/GraphicDesign'
      break;
    }
    default:
      break;
  }

  return(
    <RelativeContainer width={width} height={height}>
      <Link href={link}>
        <PromoCardContainer  background={bg}>
          <InnerContainer>
            <div>
              <PromoH2>{text}</PromoH2>
            </div>
            <LinkToProjects>
              <PromoText>
                VIEW PROJECTS
              </PromoText>
              <div>
                <RightArrowLink src={'/assets/shared/desktop/icon-right-arrow.svg'}  alt={'right arrow'}/>
              </div>
            </LinkToProjects>
          </InnerContainer>
        </PromoCardContainer>
      </Link>
    </RelativeContainer>
  )
}
