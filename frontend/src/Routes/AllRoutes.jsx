import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import VegsAndFruits from './VegAndFruits'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/admin/dashboard' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path="/vegandfruits" element={<VegsAndFruits />} />
    </Routes>
  )
}

export default AllRoutes