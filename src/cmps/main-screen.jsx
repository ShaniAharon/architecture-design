import React from 'react'

const toggleMenu = () => {
  document.body.classList.toggle('menu-open')
}

export const MainScreen = () => {
  return <div class="main-screen" onClick={toggleMenu}></div>
}
