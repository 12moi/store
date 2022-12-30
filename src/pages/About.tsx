import { Container } from "react-bootstrap";

export function About() {
  return <>
  <h1 className="text-center">About</h1>
  <Container className="d-flex justify-content-between align-items-baseline mb-4">
  
<div className="p" style={{margin:0 }}>
  <p>This is a Cart web App</p>
  </div>
  <div className="image">
  <img src="/public/imgs/1.jpg" alt="#" style={{width: "500px"}}/>
  </div>
  </Container>
  </>
  
}
