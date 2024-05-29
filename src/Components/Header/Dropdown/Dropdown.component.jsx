import Dropdown from 'react-bootstrap/Dropdown'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { PersonFill } from 'react-bootstrap-icons'

import HeaderDropdownHeaderComponent from './Header/Header.component'

import './Dropdown.styles.sass'

// The dropdown component in the main header element/component
const HeaderDropdownComponent = () => {
  return (
    <>
      <Dropdown id='HeaderDropdown'>
        <Dropdown.Toggle className='d-flex justify-content-center align-items-center'>
          <span>
            <PersonFill size={ 24 } />
          </span>
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ minWidth: '300px' }} className='p-0'>
          <HeaderDropdownHeaderComponent />
          <Navbar className='w-100'>
            <Nav className='flex-column w-100'>
              <Nav.Link href='#' className='d-block' style={{ fontSize: '.9rem' }}>Chatt</Nav.Link>
              <Nav.Link href='#' className='d-block' style={{ fontSize: '.9rem' }}>Återställ lösenord</Nav.Link>
              <Nav.Link href='#' className='fw-bold' style={{ fontSize: '.9rem' }}>Mitt Konto</Nav.Link>
            </Nav>
          </Navbar>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default HeaderDropdownComponent