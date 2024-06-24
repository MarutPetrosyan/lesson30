import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getAllAC } from './store/slices/contris'

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    axios.get('https://restcountries.com/v3.1/all')
    .then((res) => dispatch(getAllAC(res.data)))
  }, [])

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App
