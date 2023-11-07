import { Card, Col, Row,  } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Testimonial = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const testimonials = [
    {

      name:"jasonycobb", 
      description: "Very reliable and fast. Job done brilliantly. Don't hesitate to use his service. Seller is one of the best I've used so far. highly recommended.",
      imgUrl: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1699370119~exp=1699370719~hmac=2f42e6d9f20405c8429ad719601d5a4e3f55f632638e8fa28ea2f3a8112232ec",
    },
    {

      name:"Natalie", 
      description: "Rafi is always helpful and communicative. This time, he collaborated with me to solve a mystery of my completely-deleted business website. I did not have the comfort level to proceed with solving the problem on my own. I provided him with what appeared to be older backups in my cpanel and he sorted through everything and restored my site fully",
      imgUrl: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/2850652/original/image.jpg",
    },
    {
      name:"Emmanuel Sandoval",
      description:"It is a genuine pleasure to recommend Rafi as an exceptional web developer. During the time we worked together, I was amazed by his talent and dedication to the world of web development. Rafi is a valuable addition to any web development team. His work ethic, professionalism, and focus on quality set him apart as a leader in his field.I highly recommend Rafi for any web development project. I'm confident he will continue to have a positive impact on any company or project he participates in.Working with Rafi is an enriching experience, and I would not hesitate to collaborate with him on future projects.",
      imgUrl:"https://media.licdn.com/dms/image/D4E03AQG1FWUKxf5wVw/profile-displayphoto-shrink_400_400/0/1695658123605?e=1704931200&v=beta&t=r2Sp2caHMo0QC39cWv57_0wrcZHlTjUAO6EvtxbAYjE",
    }
   

  ];


  return (
    <section className="skill " id="testimonials">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn pt-5">
                        <h2>Testimonial</h2>
                       
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            {
                                testimonials.map((reviews, index)=>{
                                    return (
                                        <div className="item">
                                            <Card className="testimonial-card">
                                                <img alt="client" variant="top" src={reviews.imgUrl}/>
                                                    <Card.Body>
                                                        <Card.Title>{reviews.name}</Card.Title>
                                                        <span>{reviews.description}</span>
                                                    </Card.Body>
                                            </Card>
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}
