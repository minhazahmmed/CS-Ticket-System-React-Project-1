
import { Suspense } from 'react'
import './App.css'
import Card from './Component/Card'
import Container from './Component/Container'
import Footer from './Component/Footer'
import Issues from './Component/Issues'
import Navbar from './Component/Navbar'

const fetchIssues = fetch("/issues.json")
.then(res => res.json())

function App() {


  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar></Navbar>
      <main className='flex-1'>
           <Card></Card>
      </main>
      <Suspense fallback={<h1 className='text-black'>Loading.....</h1>}>
           <Issues fetchIssues={fetchIssues}></Issues>
      </Suspense>
     
      
   
    <Footer></Footer>

    </div>

  
  )
}

export default App
