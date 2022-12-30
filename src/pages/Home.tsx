import { Button, Container } from "react-bootstrap";
import Footer from "../components/Footer";

export function Home() {
  return<>
  <h1 className="text-center">Welcome to Store</h1>
  <Container className="d-flex justify-content-between align-items-center ">
  
<div className="p" >
  <p>You need a Shopping Cart to add your shopping list for your payments. Here is your perfect place to add your list</p>
  <h5>Go to the Store!</h5>
  <a href="/store"><Button>Store</Button></a>
  </div>
  <div>
  <img src="/public/imgs/2.jpg" alt="#" style={{width: "500px", height:"400px"}}/>
  </div>
  </Container>
  <Footer/>
  </>
}
