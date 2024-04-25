import RightContainer from "./RightContainer"
import CardContainer from "./CardContainer"

const data =[
  {
    id:1,
    heading_image: "https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg",
    title: "✍️ Article",
    headline: "What if famous brands had regular fonts? Meet RegulaBrands!",
    text: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    dp: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Siddharth Goyal"
  },
  {
    id:2,
    heading_image: "https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "🔬️ Education",
    headline: "Tax Benefits for Investment under National Pension Scheme launched by Government",
    text: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    dp: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Sarah West"
  },
  {
    id:3,
    heading_image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "🤝 Meetup",
    headline: "Finance & Investment Elite Social Mixer @Lujiazui",
    text: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    dp: "https://images.pexels.com/users/avatars/501272/justin-shaifer-473.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1",
    name: "Ronal Jones"
  }
]
function NewsContainer({isClicked}) {
    
  return (
    <>
        <div className="container3">
        <div className="mx-auto d-flex gap-5 justify-content-center" style={{maxWidth: "1040px"}}>
            <div className="posts-center position-relative">
          {  data.map((e)=>(<CardContainer key={e.id} heading_image={e.heading_image} title={e.title} headline={e.headline}  dp={e.dp} name={e.name} />))
            }

            </div>
            <div className="sidebar">
                <RightContainer isClicked={isClicked}/>
            </div>


    </div>


    
      
    </div>
    </>
  )
}

export default NewsContainer
