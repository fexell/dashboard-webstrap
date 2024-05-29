import { useContext } from 'react'

import { WindowSmallContext, HeaderRightHiddenContext } from '../../../Contexts/Contexts.contexts'

import './Overlay.styles.sass'

// The header right overlay component, which is shown when the window is below 1200px
// and when it isn't hidden
const HeaderRightOverlayComponent = () => {
  const [ isWindowSmall, ] = useContext(WindowSmallContext)
  const [ isHeaderRightHidden, setHeaderRightHidden ] = useContext(HeaderRightHiddenContext)

  return (
    <>
      { (isWindowSmall && !isHeaderRightHidden) && (
        <div id='HeaderRightOverlay' className='header--right__overlay' onClick={ () => setHeaderRightHidden(true) }></div>
      ) }
    </>
  )
}

export default HeaderRightOverlayComponent