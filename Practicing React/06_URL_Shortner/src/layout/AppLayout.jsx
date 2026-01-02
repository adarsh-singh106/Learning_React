import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
        <main>
            {/* Header */}
            <Header/>

            {/* Main */}
            <Outlet/>
        </main>

        {/* Footer  */}
    </div>
  )
}

export default AppLayout