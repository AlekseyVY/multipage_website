import CommonPortfolioCard from "./CommonPortfolioCard/CommonPortfolioCard";


const CommonPortfolioCardContainer = ({type = 'web'}) => {
  const webArr = [
    {
      name: 'EXPRESS',
      text_top: 'A multi-carrier shipping website for',
      text_bot: 'ecommerce businesses',
      img: '/assets/web-design/desktop/image-express.jpg'
      },
    {
      name: 'TRANSFER',
      text_top: 'Site for low-cost money transfers and',
      text_bot: 'sending money within seconds',
      img: '/assets/web-design/desktop/image-transfer.jpg'
    },
    {
      name: 'PHOTON',
      text_top: 'A state-of-the-art music player with',
      text_bot: 'high-resolution audio and DSP effects',
      img: '/assets/web-design/desktop/image-photon.jpg'
    },
    {
      name: 'BUILDER',
      text_top: 'Connects users with local contractors',
      text_bot: 'based on their location',
      img: '/assets/web-design/desktop/image-builder.jpg'
    },
    {
      name: 'BLOGR',
      text_top: 'Blogr is a platform for creating an online',
      text_bot: 'blog or publication',
      img: '/assets/web-design/desktop/image-blogr.jpg'
    },
    {
      name: 'CAMP',
      text_top: 'Get expert training in coding, data,',
      text_bot: 'design, and digital marketing',
      img: '/assets/web-design/desktop/image-camp.jpg'
    },
  ]
  const appArr = [
    {
      name: 'AIRFILTER',
      text_top: 'Solving the problem of poor indoor air',
      text_bot: 'quality by filtering the air',
      img: '/assets/app-design/desktop/image-airfilter.jpg'
    },
    {
      name: 'EYECAM',
      text_top: 'Product that lets you edit your favorite ',
      text_bot: 'photos and videos at any time',
      img: '/assets/app-design/desktop/image-eyecam.jpg'
    },
    {
      name: 'FACEIT',
      text_top: 'Get to meet your favorite internet ',
      text_bot: 'superstar with the faceit app',
      img: '/assets/app-design/desktop/image-faceit.jpg'
    },
    {
      name: 'TODO',
      text_top: 'A todo app that features cloud sync with',
      text_bot: 'light and dark mode',
      img: '/assets/app-design/desktop/image-todo.jpg'
    },
    {
      name: 'LOOPSTUDIOS',
      text_top: 'A VR experience app made for ',
      text_bot: 'Loopstudios',
      img: '/assets/app-design/desktop/image-loopstudios.jpg'
    }
  ]
  const graphArr = []

  let data
  switch (type) {
    case 'web': {
      data = webArr;
      break;
    }
    case 'app': {
      data = appArr;
      break;
    }
    case 'graph': {
      data = graphArr;
      break;
    }
    default:
      break;
  }
  return (
    <>
      {
        data.map((card, id) => {
          return (
            <CommonPortfolioCard
              key={id}
              card={card} />
          )
        })
      }
    </>

    //
    )

}


export default CommonPortfolioCardContainer;