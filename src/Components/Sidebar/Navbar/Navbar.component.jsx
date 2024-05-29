import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { HouseFill, FileFill, WindowDesktop, BarChartFill, PencilSquare } from 'react-bootstrap-icons'

import './Navbar.styles.sass'

// The sidebar navbar/menu component
const SidebarNavbarComponent = () => {
  return (
    <>
      <div id='SidebarNavbar' className='sidebar__navbar'>
        <Container fluid className='sidebar__navbar__container'>
          <Navbar className='w-100'>
            <Nav className='flex-column w-100'>
              <Nav.Link as={ NavLink } to='/' className='d-flex align-items-center w-100'>
                <HouseFill size={ 16 } />
                <span className='link__text'>Instrumentbräda</span>
              </Nav.Link>
              <Nav.Link href='#' className='d-flex align-items-center w-100'>
                <FileFill size={ 16 } />
                <span className='link__text'>Sidor</span>
              </Nav.Link>
              <Nav.Link href='#' className='d-flex align-items-center w-100'>
                <WindowDesktop size={ 16 } />
                <span className='link__text'>Applikationer</span>
              </Nav.Link>
              <Nav.Link href='#' className='d-flex align-items-center w-100'>
                <BarChartFill size={ 16 } />
                <span className='link__text'>Diagram</span>
              </Nav.Link>
              <Nav.Link href='#' className='d-flex align-items-center w-100'>
                <PencilSquare size={ 16 } />
                <span className='link__text'>Blanketter</span>
              </Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      </div>
    </>
  )
}

export default SidebarNavbarComponent