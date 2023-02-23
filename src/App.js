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
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Resume from './Pages/Resume/Resume'

import Applauz from './Pages/Work/Applauz/Applauz'
import Fiverr from './Pages/Work/Fiverr/Fiverr'
import SmartTenant from './Pages/Work/SmartTenant/SmartTenant'
import Vuzec from './Pages/Work/Vuzec/Vuzec'

import Error from './Pages/Error/Error'

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
