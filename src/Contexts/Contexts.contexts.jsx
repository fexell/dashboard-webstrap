import { createContext } from 'react'

// The is-window-small context
export const WindowSmallContext = createContext(false)

// The is-window-big context
export const WindowBigContext = createContext(false)

// The is-sidebar-collapsed context
export const SidebarCollapsedContext = createContext(false)

// The is-sidebar-being-hovered context
export const SidebarHoverContext = createContext(false)

// The is-sidebar-hidden context
export const SidebarHiddenContext = createContext(true)

// The is-header-right-shown context
export const HeaderRightHiddenContext = createContext(true)