import React from 'react'
import {Route, Routes} from 'react-router'
import {Header} from './cmps/header'
import HomePage from './pages/home-page'
import {Experince} from './cmps/exp-section'
import {OurService} from './cmps/our-service'
import {Discover} from './cmps/discover'
import {Clients} from './cmps/clients'
import {Dream} from './cmps/dream'
import {Footer} from './cmps/footer'

export function App() {
  return (
    <main className="main-toy-app">
      <Header />
      <Routes>
        {/* <Route element={<ToyDetails />} path="/toy/details/:toyId" />
    <Route element={<ToyEdit />} path="/toy/edit/:toyId" />
    <Route element={<ToyEdit />} path="/toy/edit" />
    <Route element={<ToyIndex />} path="/toy" /> */}
        <Route element={<HomePage />} path="/" />
      </Routes>
      <Experince />
      <OurService />
      <Discover />
      <Clients />
      <Dream />
      <Footer />

      {/* <UserMsg /> */}
    </main>
  )
}
