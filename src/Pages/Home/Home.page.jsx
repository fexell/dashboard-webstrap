import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { LaptopFill, ArrowDownShort, ArrowUpShort, MortarboardFill, BuildingsFill } from 'react-bootstrap-icons'

// Home page
const HomePage = () => {
  return (
    <>
      <div id='Home' className='home__page'>
        <Container fluid className='home__page__container'>
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <h5 className='fs-5 m-0 p-2'>Portföljprestanda</h5>
                </Card.Header>
                <Row className='g-0'>
                  <Col xs={ 12 } lg={ 4 }>
                    <Card className='border-0'>
                      <Card.Body>
                        <Row>
                          <Col xs={ 2 } className='d-flex justify-content-center align-items-center'>
                            <LaptopFill size={ 32 } />
                          </Col>
                          <Col>
                            <Row className='flex-column'>
                              <Col>
                                <p className='text-muted'>Kontantinsättning</p>
                              </Col>
                              <Col>
                                <h1>1,7M</h1>
                              </Col>
                              <Col>
                                <span className='me-2 text-danger'>
                                  <ArrowDownShort />
                                  50.0%
                                </span>
                                <span>
                                  Mindre inkomster
                                </span>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={ 12 } lg={ 4 }>
                    <Card className='border-0'>
                      <Card.Body>
                        <Row>
                          <Col xs={ 2 } className='d-flex justify-content-center align-items-center'>
                            <MortarboardFill size={ 32 } />
                          </Col>
                          <Col>
                            <Row className='flex-column'>
                              <Col>
                                <p className='text-muted'>Investerade utdelningar</p>
                              </Col>
                              <Col>
                                <h1>9M</h1>
                              </Col>
                              <Col>
                                <span className='me-2'>
                                  Tillväxthastighet:
                                </span>
                                <span className='text-info'>
                                  <ArrowDownShort />
                                  14.0%
                                </span>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={ 12 } lg={ 4 }>
                    <Card className='border-0'>
                      <Card.Body>
                        <Row>
                          <Col xs={ 2 } className='d-flex justify-content-center align-items-center'>
                            <BuildingsFill size={ 32 } />
                          </Col>
                          <Col>
                            <Row className='flex-column'>
                              <Col>
                                <p className='text-muted'>Realisationsvinster</p>
                              </Col>
                              <Col>
                                <h1>5,500 kr</h1>
                              </Col>
                              <Col>
                                <span className='me-2'>
                                  Tillväxthastighet:
                                </span>
                                <span className='text-warning'>
                                  <ArrowUpShort />
                                  7.50%
                                </span>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default HomePage