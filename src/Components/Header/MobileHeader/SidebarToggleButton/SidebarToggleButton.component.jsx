import { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import { List } from 'react-bootstrap-icons'

import { SidebarHiddenContext } from '../../../../Contexts/Contexts.contexts'

// The sidebar toggle button component, which hides and unhides the sidebar
const SidebarToggleButtonComponent = () => {
  const [ isSidebarHidden, setSidebarHidden ] = useContext(SidebarHiddenContext)

  return (
    <>
      <Button onClick={ () => setSidebarHidden(!isSidebarHidden) }>
        <List size={ 24 } />
      </Button>
    </>
  )
}

export default SidebarToggleButtonComponent