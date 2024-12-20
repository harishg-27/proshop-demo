import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
// import HomeScreen from './screens/HomeScreen'
// const sampleData = require('./db.json')


const App = () => {
  // console.log("sampleData",sampleData)
  return (
    <>
      <Header/>
      <main className='py-3'>
        <Container>
          {/* <h1>Welcome to ProShop</h1> */}
          <Outlet/>
        </Container>
      </main>  
      <Footer/>

    </>
  )
}

export default App
