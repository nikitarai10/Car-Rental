import React from "react";
import { Link } from "react-router-dom";
import {Container,Row,Col,ListGroup,ListGroupItem} from 'reactstrap';
import "../../assets/css/footer.css";

const quickLinks = [
    {
      path: "/about",
      display: "About",
    },
  
    {
      path: "#",
      display: "Privacy Policy",
    },
  
    {
      path: "/cars",
      display: "Car Listing",
    },
    {
      path: "/blogs",
      display: "Blog",
    },
  
    {
      path: "/contact",
      display: "Contact",
    },
  ];

const Footer = () =>{
    return(
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='4' md='4' sm='12'>
                        <div className="footer_logo">
                            <h1>
                                <Link to='/home' className="d-flex align-items-center gap-2">
                                <i className="ri-car-line"></i>
                                <span>
                                    Rent Car <br /> Service
                                </span>
                                </Link>
                            </h1>
                        </div>
                        <p className="footer_logo_content">
                        Consequuntur, distinctio, itaque reiciendis ab cupiditate harum ex
              quam veniam, omnis expedita animi quibusdam obcaecati mollitia?
              Delectus et ad illo recusandae temporibus?
                        </p>
                    </Col>

                    <Col lg="2" md="4" sm="6">
            <div className="mb-2">
              <h5 className="footer_link_title">Quick Links</h5>
              <ListGroup>
                {
                    quickLinks.map((item,index)=>(
                        <ListGroupItem key={index} className='p-0 mt-3 quick_link' >
                            <Link to={item.path}> {item.display} </Link>
                        </ListGroupItem>
                    ))
                }
              </ListGroup>
             
            </div>
          </Col>
          
          <Col lg="3" md="4" sm="6">
            <div className="mb-2">
              <h5 className="footer_link_title mb-4">Head Office</h5>
              <p className="office_info">123 Babarmahal, Kathmandu, Nepal</p>
              <p className="office_info">Phone: +9779822275365</p>
              <p className="office_info">Email: carrental054321@gmail.com</p>
              <p className="office_info">Office Time: 10am - 7pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-2">
              <h5 className="footer_link_title mb-2">Newsletter</h5>
              <p className="section_description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i className="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12" className="mt-4">
            <div className="footer_bottom">
              <p className="section_description d-flex align-items-center justify-content-center gap-1 mt-4">
                <i className="ri-copyright-line"></i>Copyright {new Date().getFullYear()}, Developed by
                Nikita Rai. All rights reserved.
              </p>
            </div>
          </Col>


                </Row>
            </Container>
        </footer>
    )
};
export default Footer;