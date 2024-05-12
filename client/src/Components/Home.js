import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer';
import Contact from './Contact';

const Home=()=>{
    return(
        <div>
            <div>
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd0gvS82bxLlS1LBuq8630ujCf7rfqYBMWQLaJyvxOnUnRbDg8VlnBaklZlLBcSEUkNk4&usqp=CAU"
                        alt="First slide"
                        style={{width:'500px', height:'500px'}}
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://st2.depositphotos.com/3343907/7289/i/380/depositphotos_72891057-stock-photo-information-concept.jpg"
                        alt="Second slide"
                        style={{width:'500px', height:'500px'}}
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://static8.depositphotos.com/1074452/1058/i/380/depositphotos_10584789-stock-photo-advice-help-support-and-tips.jpg"
                        alt="Third slide"
                        style={{width:'500px', height:'500px'}}
                        />
                        <Carousel.Caption>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://st3.depositphotos.com/7865540/13792/i/380/depositphotos_137929306-stock-photo-support-text-on-screen.jpg"
                        alt="fort slide"
                        style={{width:'500px', height:'500px'}}
                        />
                        <Carousel.Caption>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://st4.depositphotos.com/20363444/29203/i/380/depositphotos_292037858-stock-photo-attractive-call-center-operator-holding.jpg"
                        alt="five slide"
                        style={{width:'500px', height:'500px'}}
                        />
                        <Carousel.Caption>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            {/* <div>
                <Footer/>
            </div> */}
            <br/>
            <div>
                <Contact/>
            </div>
        </div>
    )
}
export default Home