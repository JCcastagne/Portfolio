import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

// layouts
import RootLayout from './layouts/RootLayout'
import WorkLayout from './layouts/WorkLayout'

// pages
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Applauz from './pages/Work/Applauz/Applauz'
import Freelance from './pages/Work/Freelance/Freelance'
import SmartTenant from './pages/Work/SmartTenant/SmartTenant'
import Vuzec from './pages/Work/Vuzec/Vuzec'
import Error from './pages/Error/Error'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='work' element={<WorkLayout />}>
        <Route path='applauz' element={<Applauz />} />
        <Route path='freelance' element={<Freelance />} />
        <Route path='smartTenant' element={<SmartTenant />} />
        <Route path='vuzec' element={<Vuzec />} />
      </Route>

      <Route path='*' element={<Error />} />
    </Route>
  )
)

function App () {
  return <RouterProvider router={router} />
}

export default App
