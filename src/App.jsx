import { useState } from 'react'
import './App.css'
import Section1 from './component/Section1/Section1'
import Section2 from './component/Section2/Section2'
import { Users } from 'lucide-react'

let users = [
{
    id: 1,
    img: "https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=900&auto=format&fit=crop&q=60",
    intro: "Customers with full access to digital banking services.",
    tag: "Satisfied",
    color: "#60a5fa"
},
{
    id: 2,
    img: "https://images.unsplash.com/photo-1542767352-e98201e84ed8?w=900&auto=format&fit=crop&q=60",
    intro: "Customers with limited access to banking products.",
    tag: "Underserved",
    color: "#facc15"
},
{
    id: 3,
    img: "https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?q=80&w=1335&auto=format&fit=crop",
    intro: "Customers with little or no access to formal banking.",
    tag: "Underbanked",
    color: "#f87171"
},
{
    id: 4,
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&auto=format&fit=crop&q=60",
    intro: "Active users regularly using mobile banking.",
    tag: "Active",
    color: "#4ade80"
},
{
    id: 5,
    img: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=900&auto=format&fit=crop&q=60",
    intro: "New customers recently joined the platform.",
    tag: "New Users",
    color: "#c084fc"
},
{
    id: 6,
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&auto=format&fit=crop&q=60",
    intro: "Customers with high transaction activity.",
    tag: "Frequent",
    color: "#818cf8"
},
{
    id: 7,
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&auto=format&fit=crop&q=60",
    intro: "Customers who rarely use digital banking.",
    tag: "Inactive",
    color: "#6b7280"
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
