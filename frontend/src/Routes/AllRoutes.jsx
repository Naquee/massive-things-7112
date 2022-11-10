import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import VegsAndFruits from './VegAndFruits'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<h1>Welcome</h1>}/>
        <Route path="/vegandfruits" element={<VegsAndFruits/>}/>
    </Routes>
  )
}

export default AllRoutes