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
import Contact from './pages/Contact/Contact'
import Resume from './pages/Resume/Resume'

import Applauz from './pages/Work/Applauz/Applauz'
import Fiverr from './pages/Work/Fiverr/Fiverr'
import SmartTenant from './pages/Work/SmartTenant/SmartTenant'
import Vuzec from './pages/Work/Vuzec/Vuzec'

import Error from './pages/Error/Error'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<Home />} />

      <Route element={<RootLayout />}>
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='resume' element={<Resume />} />
        <Route path='work' element={<WorkLayout />}>
          <Route path='applauz' element={<Applauz />} />
          <Route path='fiverr' element={<Fiverr />} />
          <Route path='smartTenant' element={<SmartTenant />} />
          <Route path='vuzec' element={<Vuzec />} />
        </Route>
      </Route>
      <Route path='*' element={<Error />} />
    </Route>
  )
)

function App () {
  return <RouterProvider router={router} />
}

export default App
