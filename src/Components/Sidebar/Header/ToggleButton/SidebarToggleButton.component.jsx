import { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import { List, X } from 'react-bootstrap-icons'

import { WindowBigContext, SidebarCollapsedContext } from '../../../../Contexts/Contexts.contexts'

// The component containing the sidebar-collapse button
const SidebarToggleButtonComponent = () => {
  const [ isWindowBig, ] = useContext(WindowBigContext)
  const [ isSidebarCollapsed, setSidebarCollapsed ] = useContext(SidebarCollapsedContext)

  return (
    <>
      {/* If the window is greater 1200px, display the sidebar-collapse button */}
      { isWindowBig && (
        <Button className='d-flex justify-content-center align-items-center w-100 h-100' onClick={ () => setSidebarCollapsed(!isSidebarCollapsed) }>
          { !isSidebarCollapsed ? <List size={ 32 } /> : <X size={ 32 } /> }
        </Button>
      ) }
    </>
  )
}

export default SidebarToggleButtonComponent