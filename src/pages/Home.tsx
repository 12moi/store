import { Button, Container } from "react-bootstrap";

export function Home() {
  return<>
  <h1 className="text-center">Welcome to Store</h1>
  <Container className="d-flex justify-content-between align-items-center ">
  
<div className="p" >
  <p>This is your shopping cart to add the list of your product to be bought.</p>
  <h6>You need a Cart for your shopping ,</h6>
  <h5>We got you covered</h5>
  <a href="/store"><Button>Store</Button></a>
  </div>
  <div>
  <img src="/public/imgs/2.jpg" alt="#" style={{width: "500px", height:"400px"}}/>
  </div>
  </Container>
  </>
}
