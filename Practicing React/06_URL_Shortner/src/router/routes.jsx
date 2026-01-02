import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Page Imports
import Auth from '@/Pages/Auth'
import Dashboard from '@/Pages/Dashboard'
import LandingPage from '@/Pages/LandingPage'
import LinkPage from '@/Pages/LinkPage' // Renamed to avoid collision with react-router-dom 'Link'
import Redirect from '@/Pages/Redirect'
import AppLayout from '@/layout/AppLayout'// Assuming this path, make sure to import it!

const AppRouter = () => {
  return (
    <Routes>
      {/* Parent Route: Renders AppLayout.
        All routes inside this will render INSIDE AppLayout.
      */}
      <Route element={<AppLayout />}>
        
        <Route path='/' element={<LandingPage />} />
        
        <Route path='/dashboard' element={<Dashboard />} />
        
        <Route path='/auth' element={<Auth />} />
        
        {/* Dynamic Routes */}
        <Route path='/link/:id' element={<LinkPage />} />
        
        <Route path='/:id' element={<Redirect />} />
        
      </Route>
    </Routes>
  )
}

export default AppRouter