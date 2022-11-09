import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<h1>Welcome</h1>}/>
    </Routes>
  )
}

export default AllRoutes