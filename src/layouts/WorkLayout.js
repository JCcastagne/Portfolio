import { Outlet } from 'react-router-dom'

import ViewMoreFooter from '../pages/Work/ViewMoreFooter'

export default function WorkLayout () {
  return (
    <div class='WorkLayout'>
      <Outlet />
      <ViewMoreFooter />
    </div>
  )
}
