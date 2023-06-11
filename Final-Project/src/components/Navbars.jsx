import {useState,useEffect} from "react"
import {Navbar, Container, Nav} from 'react-bootstrap'

import {navLinks} from '../data/index'
import {NavLink} from "react-router-dom"

const Navbars = () => {
  const[changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor= () => {
    if (window.scrollY > 10) {
      setChangeColor(true); 
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener('scroll', changeBackgroundColor);
  });

  return (
   <div>
     <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="#home" className='fs-3 fw-bold'>Elvira</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink to={link.path} className={({ isActive, isPending }) =>
                    (isPending ? "pending" : isActive ? "active" : "")} end>{link.text}
                    </NavLink>

                  </div>
                );
              })}
            </Nav>

            <div className='text-center'>
              <button className='btn rounded-10' style={{ backgroundColor: '#ededed', color: '#144458' }}>Daftar</button>
            </div>
            {/* className="btn btn-lg rounded-1 me-2"
            style={{ backgroundColor: '#144458', color: '#ffff' }} */}
          </Navbar.Collapse>
        </Container>
      </Navbar>

   </div>
  );
};

export default Navbars;