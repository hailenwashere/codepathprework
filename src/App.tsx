import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import Card from './components/Card'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'

import supabase from './client.ts'
import Home from './pages/Home.tsx'

interface Creator {
  id: number
  name: string
  url: string
  description: string
  imageURL: string
}

function App() {
  const [creatordata, setCreatorData] = useState<Creator[]>()

  useEffect(() => {
      async function getCreators() {
          const { data, error } = await supabase
              .from('creators')
              .select('*')
          // console.log(data)
          if (data == null)
          {
              setCreatorData([])
          } else {
              setCreatorData(data)
          }
      }

      getCreators()

  }, [])

  if (!creatordata) {
    return <div>Loading...</div>
  } else {
    creatordata.sort((a, b) => a.id - b.id)
  }

  return (
    <>
      <Router>
				<Routes>
					<Route path="/addcreator" element={<AddCreator />}/>
					<Route path="/showcreators" element={<ShowCreators creatorData={creatordata}/>}/>
          <Route path="/editcreator/:id" element={<EditCreator creatorData={creatordata}/>}/>
          <Route path="/creators/:id" element={<ViewCreator creatorData={creatordata}/>}/>
          <Route path='/' element={<Home creatorData={creatordata}/>}/>
				</Routes>
			</Router>
    </>
  )
}

export default App