import { useState } from 'react'
import './App.css'
import Section1 from './component/Section1/Section1'
import Section2 from './component/Section2/Section2'
import { Users } from 'lucide-react'

let users = [
{
    img: "https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
    intro: `Customers with full access to digital banking services and high satisfaction.`,
    tag: `Satisfied`
},
{
    img: "https://images.unsplash.com/photo-1542767352-e98201e84ed8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
    intro: `Customers with limited access to banking products and moderate satisfaction.`,
    tag: `Underserved`
},
{
    img: "https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: `Customers with little or no access to formal banking services.`,
    tag: `Underbanked`
}
]
function App() {

  return (
    <>
      <Section1 user={users} />
      <Section2 />
    </>
  )
}

export default App
