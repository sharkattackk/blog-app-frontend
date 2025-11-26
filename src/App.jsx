
import NavBar from './components/NavBar'
import ProfileHeader from './components/ProfileHeader'
import BlogList from './components/BlogList'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import "./index.css"
import Post from './pages/post/post'
import { Amplify } from 'aws-amplify'
import awsconfig from "./aws-exports"
import "@aws-amplify/ui-react/styles.css";
import { AppProvider } from './AppContext'

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
              <Route path="/" element={
                <div className="h-full flex flex-row items-start px-4 overflow-hidden">
                  <ProfileHeader />

                  <BlogList />

                
                </div>} 
                />
              <Route path="/post" element={<Post  />}/>
            </Routes>
          
        </div>
      </Router>
    </AppProvider>
  )
}

export default App
