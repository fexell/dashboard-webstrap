import { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { Search } from 'react-bootstrap-icons'

import { WindowSmallContext } from '../../../Contexts/Contexts.contexts'

// The search bar in the "HeaderRight" component
const HeaderSearchBarComponent = () => {
  const [ isWindowSmall, ] = useContext(WindowSmallContext)

  return (
    <>
      <div id='HeaderSearchBar'>
        <Container fluid>
          <Row>
            { isWindowSmall && (
              <Col className='d-flex justify-content-center align-items-center' style={{ maxWidth: '48px' }}>
                { isWindowSmall && ( <Search size={ 24 } /> ) }
              </Col>
            ) }
            <Col>
              { !isWindowSmall
                ? <Form.Control type='text' placeholder='Sök...' />
                : <Form.Control size='lg' type='text' placeholder='Sök...' className='ps-0' /> }
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default HeaderSearchBarComponent