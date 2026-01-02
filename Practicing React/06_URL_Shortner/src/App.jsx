import React from 'react'
import AppRouter from './router/routes'

const App = () => {
  return (
    // Add min-h-screen to ensure full coverage
    <div className='min-h-screen bg-background text-foreground'>
      <AppRouter/>
    </div>
  )
}

export default App