import {InnerContainer, LinkToProjects, PromoCardContainer, RightArrowLink} from "./styles";


export default function PromoCardDesign({width = '54.1rem', height = '30.8rem', type = "app"}) {

  const picArr = ['/assets/home/desktop/image-app-design.jpg', '/assets/home/desktop/image-graphic-design.jpg',
    '/assets/home/desktop/image-web-design-small.jpg', '/assets/home/desktop/image-web-design-large.jpg']
  const textArr = ['WEB DESIGN', 'APP DESIGN', 'GRAPHIC DESIGN']
  let bg
  let text

  switch(type){
    case "app": {
      bg = picArr[0]
      text = textArr[1]
      break;
    }
    case "web":{
      if(height === '30.8rem'){
        bg = picArr[2]
      } else {
        bg = picArr[3]
      }
      text = textArr[0]
      break;
    }
    case "graphic": {
      bg = picArr[1]
      text = textArr[2]
      break;
    }
    default:
      break;
  }

  return(
    <PromoCardContainer width={width} height={height} background={bg}>
      <InnerContainer>
        <div>
          <h2>{text}</h2>
        </div>
        <LinkToProjects>
          <div>
            VIEW PROJECTS
          </div>
          <div>
            <RightArrowLink src={'/assets/shared/desktop/icon-right-arrow.svg'}  alt={'right arrow'}/>
          </div>
        </LinkToProjects>
      </InnerContainer>
    </PromoCardContainer>
  )
}