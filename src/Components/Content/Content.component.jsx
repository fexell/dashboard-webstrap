import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

// The main content component
const ContentComponent = () => {
  return (
    <>
      <div id='Content' className='content'>
        <Container fluid className='content__container'>

          {/* Display the current page's content (whatever is in the specific page) */}
          <Outlet />
        </Container>
      </div>
    </>
  )
}

export default ContentComponent