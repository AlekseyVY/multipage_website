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
  const appArr = []
  const graphArr = []

  let data = webArr
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