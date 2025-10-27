import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import './App.css'

export function App() {
  return (
    <div className="w-full min-h-screen bg-[#F8F9FA]">
      <Navigation />
      <Outlet /> {/* This is where pages will appear */}
    </div>
  )
}