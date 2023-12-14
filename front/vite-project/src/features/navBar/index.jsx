import {React, useEffect, useState} from 'react';
import {Container, Navbar, Nav, NavDropdown} from "react-bootstrap";

import logo from '../../assets/logo.png'
import {useFetching} from "../../hooks/useFetching.js";
import FurnitureService from "../../api/furniture/index.jsx";

import './style.scss'
import {Link, useLocation} from "react-router-dom";


const NavigationBar = () => {
    const [furniture, setFurniture] = useState([])
    const location = useLocation()
    console.log(location.pathname)

    const [fetchFurniture, isPostsLoading, postError] = useFetching(async () => {
                const response = await FurnitureService.getAllTypes();
                console.log(response)
                setFurniture(prevState => ([...response.data.results]))
            })
            useEffect(() => {
                fetchFurniture()
            }, []
            )



    return (
        <Navbar style={{zIndex:1000}} expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
            <img src={logo} width="198px" alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto justify-content-around flex-grow-1 my-2 my-lg-0"
            navbarScroll
          >
              <NavDropdown
                  className={`base-header ${location.pathname.includes("/catalog") && "active-link"}`}
                  style={{margin: "0 16px"}}
                  title="Каталог"
                  id="navbarScrollingDropdown"
              >
                {furniture
                    && furniture?.map(furnitureItem =>
                        <NavDropdown.Item
                            key={furnitureItem.slug}
                            as={Link} to={{pathname: `/catalog/${furnitureItem.slug}`}}
                            className={"text-black base-header nav-dropbox-link"}
                        >
                            {furnitureItem.title}

                        </NavDropdown.Item>
                    )
                }
            </NavDropdown>
            <Nav.Link
                className={`base-header ${location.pathname.includes("/about") && "active-link"}`}
                style={{margin: "0 16px"}}
                as={Link} to="/about"
            >
                О нас
            </Nav.Link>
            <Nav.Link
                className={`base-header ${location.pathname.includes("/delivery") && "active-link"}`}
                style={{margin: "0 16px"}}
                as={Link} to="/delivery"
            >
                Доставка
            </Nav.Link>
            <Nav.Link
                className={`base-header ${location.pathname.includes("/contacts") && "active-link"}`}
                style={{margin: "0 16px"}}
                as={Link} to="/contacts"
            >
                Контакты
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default NavigationBar;
