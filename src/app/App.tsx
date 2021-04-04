import { Link } from 'react-router-dom'
import { AppHeader, Button } from '../lib'

export const App = () => {
  return (
    <div className="main-content">
      <AppHeader>
        <div className="left">
          <h1>Dank Design</h1>
          <Link to="/">Home</Link>
        </div>
        <div className="right">
          <Button>Log Out</Button>
        </div>
      </AppHeader>
    </div>
  )
}
