import {Navbar, Container, Nav} from 'react-bootstrap'

import {navLinks} from '../data/index'
import {NavLink} from "react-router-dom"

const Navbars = () => {
  return (
   <div>
     <Navbar expand="lg">
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
              <button className='btn btn-outline-light rounded-10 text-white'>Daftar</button>
            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>

   </div>
  );
};

export default Navbars;
