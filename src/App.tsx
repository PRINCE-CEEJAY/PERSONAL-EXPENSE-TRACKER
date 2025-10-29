import React from 'react'
import Dashboard from './components/custom/Dashboard'
import Transactions from './components/custom/Transactions'

export default function App() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-primary-foreground min-w-screen'>
      <Dashboard/>
      <Transactions/>
    </div>
  )
}
