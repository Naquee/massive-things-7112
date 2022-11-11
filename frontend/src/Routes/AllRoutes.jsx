import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'

import Login from './Login'
import Vegs from './VegAndFruits'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path="/veg" element={<Vegs/>}/>
  
        <Route path='/admin/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default AllRoutes