import './carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/images/carousel/img1.jpg';
import img2 from '../../../assets/images/carousel/img2.jpg';
import img3 from '../../../assets/images/carousel/img3.jpg';
import { Carousel } from 'react-responsive-carousel';
export default function CarouselMain() {
   return (
    <section className='main-carousel'>
       <Carousel className='carousel' autoPlay={true} interval={3000} showThumbs={false}>
      <div>
        <img src={img1} alt="Imagen 1" />
      </div>
      <div>
        <img src={img2} alt="Imagen 2" />
      </div>
      <div>
        <img src={img3} alt="Imagen 3" />
      </div>
    </Carousel>
    </section>
   )
}