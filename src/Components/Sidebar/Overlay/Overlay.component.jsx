import { useContext } from 'react'
import { SidebarHiddenContext } from '../../../Contexts/Contexts.contexts'

import './Overlay.styles.sass'

// The sidebar overlay component, when clicked hides the sidebar
const SidebarOverlayComponent = () => {
  const [ , setSidebarHidden ] = useContext(SidebarHiddenContext)

  return (
    <>
      <div id='SidebarOverlay' className='sidebar__overlay' onClick={ () => setSidebarHidden(true) }></div>
    </>
  )
}

export default SidebarOverlayComponent