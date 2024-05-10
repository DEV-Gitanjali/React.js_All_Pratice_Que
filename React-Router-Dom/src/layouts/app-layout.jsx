
import { Outlet } from 'react-router-dom'
import Header from '../components/header'

const AppLayout = () => {
  return (
    <div>
        {/* Header */}
        <Header/>
        {/* loading */}
        {/* pages */}

        <Outlet/>
    </div>
  )
}

export default AppLayout
