
import NavBar from './components/NavBar'

import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import "./index.css"
import { Amplify } from 'aws-amplify'
import awsconfig from "./aws-exports"
import "@aws-amplify/ui-react/styles.css";
import { AppProvider } from './AppContext'
import Admint from './pages/Admin/Admin'
import BlogViewer from './components/BlogViewer'
import Admin from './pages/Admin/Admin'

Amplify.configure(awsconfig)

function App() {
  
  return (
    <AppProvider>
      <Router>
        <div id="home" className="flex flex-col scroll-smooth h-screen overflow-y-hidden">
          <div className="">
            <NavBar />
          </div>
            <Routes>
              <Route path="/" element={<BlogViewer />} />
              <Route path="/admin" element={<Admin  />}/>
            </Routes>
          
        </div>
      </Router>
    </AppProvider>
  )
}

export default App
