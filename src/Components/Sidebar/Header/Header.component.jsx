import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import SidebarToggleButtonComponent from './ToggleButton/SidebarToggleButton.component'

import './Header.styles.sass'

// The header of the sidebar component
const SidebarHeaderComponent = () => {
  return (
    <>
      <header id='SidebarHeader' className='sidebar__header d-flex align-items-center'>
        <Container fluid>
          <Row>
            <Col className='sidebar__header__logo'></Col>
            <Col style={{ maxWidth: '78px' }}>

              {/* The component containing the button to collapse the sidebar */}
              <SidebarToggleButtonComponent />
            </Col>
          </Row>
        </Container>
      </header>
    </>
  )
}

export default SidebarHeaderComponent