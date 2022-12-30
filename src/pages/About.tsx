import { Button, Container } from "react-bootstrap";
import Footer from "../components/Footer";

export function About() {
  return <>
  <h1 className="text-center">About</h1>
  <Container className="d-flex justify-content-between align-items-center ">
  
<div className="p" >
  <p>This is your shopping cart to add the list of your product to be bought.</p>
  <h6>You need a Cart for your shopping ,</h6>
  <h5>We got you covered</h5>
  <a href="/store"><Button>Store</Button></a>
  </div>
  <div className="image">
  <img src="/public/imgs/2.jpg" alt="#" style={{width: "500px", height:"400px"}}/>
  </div>
  </Container>
  <Footer/>
  </>
  
}
