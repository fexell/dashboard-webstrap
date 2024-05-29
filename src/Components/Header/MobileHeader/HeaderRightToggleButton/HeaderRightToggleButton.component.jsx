import { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import { ThreeDotsVertical } from 'react-bootstrap-icons'

import { HeaderRightHiddenContext } from '../../../../Contexts/Contexts.contexts'

// The component with the button that handles showing the search bar
// and dropdown in the header
const MobileHeaderRightToggleButton = () => {
  const [ isHeaderRightHidden, setHeaderRightHidden ] = useContext(HeaderRightHiddenContext)

  const handleToggleHeaderRightHidden = () => {
    setHeaderRightHidden(!isHeaderRightHidden)

    console.log(isHeaderRightHidden)
  }

  return (
    <>
      <Button onClick={ handleToggleHeaderRightHidden }>
        <ThreeDotsVertical size={ 24 } />
      </Button>
    </>
  )
}

export default MobileHeaderRightToggleButton