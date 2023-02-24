import { Outlet } from 'react-router-dom'

import ViewMoreFooter from '../Pages/Work/ViewMoreFooter/ViewMoreFooter'

export default function WorkLayout () {
  return (
    <div class='WorkLayout'>
      <Outlet />
      <ViewMoreFooter />
    </div>
  )
}
