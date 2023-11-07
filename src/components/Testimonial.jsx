import { Card } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import client1 from '../assets/clients/image.jpg'
import client2 from '../assets/clients/1695658123605.jpeg'
import client3 from '../assets/clients/com-man-img-2.jpg'


export const Testimonial = () => {
  const responsive = {
    superLargeDesktop: {
      
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
      imgUrl: client3,
    },
    {

      name:"Natalie", 
      description: "Rafi is always helpful and communicative. This time, he collaborated with me to solve a mystery of my completely-deleted business website. I did not have the comfort level to proceed with solving the problem on my own. I provided him with what appeared to be older backups in my cpanel and he sorted through everything and restored my site fully",
      imgUrl: client1,
    },
    {
      name:"Emmanuel Sandoval",
      description:"It is a genuine pleasure to recommend Rafi as an exceptional web developer. During the time we worked together, I was amazed by his talent and dedication to the world of web development. Rafi is a valuable addition to any web development team. His work ethic, professionalism, and focus on quality set him apart as a leader in his field.I highly recommend Rafi for any web development project. I'm confident he will continue to have a positive impact on any company or project he participates in.Working with Rafi is an enriching experience, and I would not hesitate to collaborate with him on future projects.",
      imgUrl:client2,
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
