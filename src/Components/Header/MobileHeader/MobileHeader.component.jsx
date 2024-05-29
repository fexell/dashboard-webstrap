import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import SidebarToggleButtonComponent from './SidebarToggleButton/SidebarToggleButton.component'
import MobileHeaderRightToggleButton from './HeaderRightToggleButton/HeaderRightToggleButton.component'

import './MobileHeader.styles.sass'

// The mobile header component
const MobileHeaderComponent = () => {
  return (
    <>
      <header id='MobileHeader' className='mobile__header'>
        <Container fluid className='h-100'>
          <Row className='align-items-center h-100'>
            <Col xs={ 8 }></Col>
            <Col xs={ 4 } className='d-flex justify-content-end align-items-center'>
              <Row>
                <Col>
                  <SidebarToggleButtonComponent />
                </Col>
                <Col>
                  <MobileHeaderRightToggleButton />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  )
}

export default MobileHeaderComponent