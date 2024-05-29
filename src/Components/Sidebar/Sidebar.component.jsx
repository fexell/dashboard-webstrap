import { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import SidebarHeaderComponent from './Header/Header.component'
import SidebarNavbarComponent from './Navbar/Navbar.component'
import SidebarOverlayComponent from './Overlay/Overlay.component'

import { WindowSmallContext, SidebarHoverContext, SidebarHiddenContext } from '../../Contexts/Contexts.contexts'

import './Sidebar.styles.sass'

// The main sidebar component
const SidebarComponent = () => {
  const [ isWindowSmall, ] = useContext(WindowSmallContext)
  const [ , setSidebarHover ] = useContext(SidebarHoverContext)
  const [ isSidebarHidden, ] = useContext(SidebarHiddenContext)

  // If the mouse enters the sidebar, while the window width is greater than 1200px
  // set the "isSidebarHover" property to true
  const handleOnMouseEnter = () => {
    if(window.matchMedia('(min-width: 1200px)').matches) setSidebarHover(true)
  }

  // When mouse leaves/hovers outside the sidebar, while the window width is greater than 1200px
  // set the "isSidebarHover" property to false
  const handleOnMouseLeave = () => {
    if(window.matchMedia('(min-width: 1200px)').matches) setSidebarHover(false)
  }

  return (
    <>
      <aside
        id='Sidebar'
        className='sidebar'
        onMouseEnter={ handleOnMouseEnter }
        onMouseLeave={ handleOnMouseLeave }>
        <Container fluid className='sidebar__container h-100'>
          <Row className='flex-column'>
            <Col className='g-0'>
              <SidebarHeaderComponent />
            </Col>
            <Col className='g-0'>
              <SidebarNavbarComponent />
            </Col>
          </Row>
        </Container>
      </aside>
      { isWindowSmall && !isSidebarHidden && (
        // The sidebar overlay component, which is shown when sidebar isn't hidden
        <SidebarOverlayComponent />
      ) }
    </>
  )
}

export default SidebarComponent