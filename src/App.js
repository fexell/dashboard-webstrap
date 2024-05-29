import { useState, useEffect } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

import HomePage from './Pages/Home/Home.page'

import HeaderComponent from './Components/Header/Header.component'
import SidebarComponent from './Components/Sidebar/Sidebar.component'
import ContentComponent from './Components/Content/Content.component'

import {
  WindowSmallContext,
  WindowBigContext,
  SidebarCollapsedContext,
  SidebarHoverContext,
  SidebarHiddenContext,
  HeaderRightHiddenContext
} from './Contexts/Contexts.contexts'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import './Assets/Sass/Variables.styles.scss'
import './Assets/Sass/Main.styles.sass'
import './App.styles.sass'

// The layout/site structure
const Layout = () => {
  return (
    <>
      {/* Main header component */}
      <HeaderComponent />

      {/* Main sidebar component */}
      <SidebarComponent />

      {/* Main content component */}
      <ContentComponent />
    </>
  )
}

// Main app method
const App = () => {
  const [ isWindowSmall, setWindowSmall ] = useState(false) // Is the window small?
  const [ isWindowBig, setWindowBig ] = useState(false) // Is the window big?
  const [ isSidebarCollapsed, setSidebarCollapsed ] = useState(false) // Is the sidebar collapsed?
  const [ isSidebarHover, setSidebarHover ] = useState(false) // Is the sidebar being hovered?
  const [ isSidebarHidden, setSidebarHidden ] = useState(false) // Is the sidebar being hidden?
  const [ isHeaderRightHidden, setHeaderRightHidden ] = useState(true) // Is the header-right component hidden?

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Display layout in all routes */}
        <Route path='/' element={ <Layout /> }>

          {/* Home page */}
          <Route index element={ <HomePage /> } />
        </Route>
      </>
    )
  )

  // Handle on window-size-change; when the page is loaded, and when the window is being resized
  const handleOnWindowSizeChange = () => {
    if(document.readyState !== 'loading') {
      // If the window width is greater than 1200px
      if(window.matchMedia('(min-width: 1200px)').matches) {
        setWindowSmall(false) // The window is no longer small
        setWindowBig(true) // The window is big
        setSidebarHidden(false) // Don't hide the sidebar

      // Else if the window width is less than 1200px
      } else {
        setWindowBig(false) //Set the "isWindowBig" property to false, since screen is in small-mode
        setWindowSmall(true) // Set the "isWindowSmall" property to true, since it's currently a small window
        setSidebarCollapsed(false) // Set the "isSidebarCollapsed" property to false, so it is big from the start
        setSidebarHover(false) // Set the "isSidebarHover" property to false
        setSidebarHidden(true) // Set the "isSidebarHidden" to true, since the screen/window is small
      }
    }

    window.matchMedia('(min-width: 1200px)').addEventListener('change', ({ matches }) => {

      // If the window width is greater than 1200px
      if(matches) {
        setWindowSmall(false) // The window is NOT small
        setWindowBig(true) // The window IS big
        setSidebarHidden(false) // The sidebar should not be hidden

      // Else if the window width is less than 1200px
      } else if(!matches) {
        setWindowBig(false) // The window is NO LONGER big (NOT wider than 1200px)
        setWindowSmall(true) // The window is now small (less than 1200px)
        setSidebarCollapsed(false) // Sidebar should not be collapsed on small screens
        setSidebarHover(false) // Sidebar should not have its hover-state
        setSidebarHidden(true) // Since the window is now small, hide the sidebar
      }
    })
  }

  useEffect(() => {
    handleOnWindowSizeChange() // Run the window-change-function/method straight away
  }, [])

  return (
    <>
      {/* Make the Is-Window-small property context accessible to the entire app */}
      <WindowSmallContext.Provider value={[ isWindowSmall, setWindowSmall ]}>

        {/* Make the Is-Window-big property context accessible to the entire app */}
        <WindowBigContext.Provider value={[ isWindowBig, setWindowBig ]}>

          {/* Is the sidebar collapsed? (Accessible from the entire app, via context) */}
          <SidebarCollapsedContext.Provider value={[ isSidebarCollapsed, setSidebarCollapsed ]}>

            {/* Is the sidebar being hovered? (Accessible from the entire app, via context) */}
            <SidebarHoverContext.Provider value={[ isSidebarHover, setSidebarHover ]}>

              {/* The "hide-the-sidebar" property for small screens */}
              <SidebarHiddenContext.Provider value={[ isSidebarHidden, setSidebarHidden ]}>

                {/* Header right side (with dropdown and searchbar) is-hidden-context */}
                <HeaderRightHiddenContext.Provider value={[ isHeaderRightHidden, setHeaderRightHidden ]}>

                  <main id='App' className={ `app
                    ${ isSidebarCollapsed ? 'sidebar--collapsed' : '' }
                    ${ isSidebarHover ? 'sidebar--hover' : '' }
                    ${ isWindowSmall ? 'window--small' : '' }
                    ${ isWindowBig ? 'window--big' : '' }
                    ${ isSidebarHidden ? 'sidebar--hidden' : '' }` }>
                    <Container fluid className='app__container g-0'>

                      {/* Load the routes */}
                      <RouterProvider router={ routes } />

                    </Container>
                  </main>

                </HeaderRightHiddenContext.Provider>
              </SidebarHiddenContext.Provider>
            </SidebarHoverContext.Provider>
          </SidebarCollapsedContext.Provider>
        </WindowBigContext.Provider>
      </WindowSmallContext.Provider>
    </>
  )
}

export default App