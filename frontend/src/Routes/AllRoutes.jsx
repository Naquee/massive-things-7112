import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'

const AllRoutes = () => {
  return (
    <Routes>
        {/* <Route path='/' element={<h1>Welcome</h1>}/> */}
        <Route path='/' element={<Login/>}/>
    </Routes>
  )
}

export default AllRoutes