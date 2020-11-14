import React from 'react'
import SEO from '../components/seo';
import Container from '../components/container';
import about from '../assets/about.png'
import {Col, Row, Image} from 'react-bootstrap'
const AboutPage = () => {

return(
<Container>
<SEO title="About Me" />
    <h2>About Page</h2>
    <center>
  <Row>
    <Col xs={6} md={4}>
      <Image src={about} rounded />
    </Col>
    </Row>
    <h4>Hi .. my name is Ricky Noviansyah and Im interested in the world of technology as well, sharing knowledge and contributing</h4>
    <h4>I live in Tangerang, Banten province</h4>
    <h3> ~ Quote ~ </h3>
    <h5><q>Setiap manusia terlahir sama yang membedakan adalah mengisi kehidupan.</q></h5>
    <h5><q>dan janganlah puas terhadap hal yang di pelajari karena bila puas berati anda sudah berhenti belajar.</q></h5>
</center>

</Container>  
       

)
}

export default AboutPage;

