import { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import MobileHeaderComponent from './MobileHeader/MobileHeader.component'
import HeaderTitleComponent from './Title/Title.component'
import HeaderSearchBarComponent from './SearchBar/SearchBar.component'
import HeaderDropdownComponent from './Dropdown/Dropdown.component'
import HeaderRightOverlayComponent from './Overlay/Overlay.component'

import { WindowSmallContext, WindowBigContext, HeaderRightHiddenContext } from '../../Contexts/Contexts.contexts'

import './Header.styles.sass'

// The main header component
const HeaderComponent = () => {
  const [ isWindowSmall, ] = useContext(WindowSmallContext)
  const [ isWindowBig, ] = useContext(WindowBigContext)
  const [ isHeaderRightHidden, ] = useContext(HeaderRightHiddenContext)

  return (
    <>
      {/* If the window width is below 1200px, display the header meant for small screens */}
      { isWindowSmall && (
        <MobileHeaderComponent />
      ) }

      {/* The main header element */}
      <header id='Header' className='header p-3'>
        <Container fluid className='header__container h-100'>
          <Row className='h-100'>
            <Col xs={ 12 } xl={ 7 }>

              {/* The header title component, that displays the current page's name and a small footnote */}
              <HeaderTitleComponent />
            </Col>
            { ((isWindowSmall && !isHeaderRightHidden) || isWindowBig) && (
              <Col xl={ 5 } id='HeaderRight' className='d-flex align-items-center'>
                <Row className='w-100'>
                  <Col xs={ 11 } xl={ 10 }>
                    <HeaderSearchBarComponent />
                  </Col>
                  <Col xs={ 1 } xl={ 2 } className='d-flex justify-content-end align-items-center'>
                    <HeaderDropdownComponent />
                  </Col>
                </Row>
              </Col>
            ) }
          </Row>
        </Container>
      </header>
      <HeaderRightOverlayComponent />
    </>
  )
}

export default HeaderComponent