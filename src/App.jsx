import { Suspense, useState } from 'react'
import './App.css'
import Card from './Component/Card'
import Footer from './Component/Footer'
import Issues from './Component/Issues'
import Navbar from './Component/Navbar'

const fetchIssues = fetch("/issues.json")
.then(res => res.json())

function App() {
  const [issues, setIssues] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className='flex-1'>
           <Card inProgressCount={inProgress.length} resolvedCount={resolved.length} />
      </main>
      <Suspense fallback={<h1 className='text-black'>Loading.....</h1>}>
           <Issues 
              fetchIssues={fetchIssues}
              issues={issues}
              setIssues={setIssues}
              inProgress={inProgress}
              setInProgress={setInProgress}
              resolved={resolved}
              setResolved={setResolved}
           />
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
