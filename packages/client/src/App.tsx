import { useEffect } from 'react'
import './styles/App.sass'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { Forum } from './Pages/Forum'
function App() {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }

    // fetchServerData()
  }, [])
  return <div className="App">
    <Router>
      <Forum/>
    </Router>
  </div>
}

export default App
