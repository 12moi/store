import { Button, Container } from "react-bootstrap";
import Footer from "../components/Footer";

export function About() {
  return <>
  <h1 className="text-center">About</h1>
  <Container className="d-flex justify-content-between align-items-center ">
  
<div className="p" >
  <p>Store is a  web app Store that allow addition of multiple items to a Shopping Cart for for buying.</p>
  
  <h5>Check out Available products!</h5>
  <a href="/store"><Button>Store</Button></a>
  </div>
  <div className="image">
  <img src="/public/imgs/2.jpg" alt="#" style={{width: "500px", height:"400px"}}/>
  </div>
  </Container>
  <Footer/>
  </>
  
}
