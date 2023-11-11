import {React, useEffect, useState} from 'react';
import {Container, Navbar, Nav, NavDropdown} from "react-bootstrap";

import logo from '../../assets/logo.png'
import {useFetching} from "../../hooks/useFetching.js";
import DisciplinesService from "../../api/disciplines/index.jsx";


const NavigationBar = () => {
  const [disciplines, setDisciplines] = useState([])

  const [fetchDisciplines, isPostsLoading, postError] = useFetching(async () => {
            const response = await DisciplinesService.getAll();
            setDisciplines(prevState => ([...response.data.results]))
        })
        useEffect(() => {
            fetchDisciplines()
        }, []
        )



    return (
        <Navbar style={{zIndex:1000}} expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
            <img src={logo} width="198px" alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link style={{margin: "0 16px"}} href="/#feedback_id">Отзывы</Nav.Link>
            <Nav.Link style={{margin: "0 16px"}} href="/teachers/">Преподаватели</Nav.Link>
            <NavDropdown style={{margin: "0 16px"}} title="Направления" id="navbarScrollingDropdown">
                {disciplines
                    && disciplines.map(discipline =>
                        <NavDropdown.Item
                            key={discipline.id}
                            href={`/disciplines/${discipline.id}`}
                        >
                            {discipline.title}
                        </NavDropdown.Item>
                    )
                }
            </NavDropdown>
            <Nav.Link style={{margin: "0 16px"}} href="/online-education/">Онлайн обучение</Nav.Link>
            <Nav.Link style={{margin: "0 16px"}} href="/contacts/">Контакты</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default NavigationBar;
