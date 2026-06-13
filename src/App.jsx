import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Body from './components/Body'
import Login from './components/Login'
import SignUp from './components/SignUp'
import HomePage from './pages/HomePage'
import { Provider } from 'react-redux'
import appStore from './components/utils/appStore'

import FeedPage from './pages/FeedPage'
import EditProfilePage from './pages/EditProfilePage'
import ConnectionsPage from './pages/ConnectionsPage'
import RequestPage from './pages/RequestPage'
import Chat from './components/Chat'

function App() {
  return (
    <>
    <Provider store={appStore}>
      <BrowserRouter basename='/'>
          <Routes>
              <Route path='/' element={<Body />}>
                  <Route path='/' element={<HomePage />}  />
                  <Route path='/feed' element={<FeedPage />}  />
                  <Route path='/login' element={<Login />}  />
                  <Route path='/signup' element={<SignUp />}  />
                  <Route path='/edit/profile' element={<EditProfilePage />}/>
                  <Route path='/connections' element={<ConnectionsPage />}/>
                  <Route path='/connections/request' element = {<RequestPage />} />
                  <Route path='/chat/:targetUserId' element = {<Chat />} />
              </Route>
          </Routes>
      </BrowserRouter>
     </Provider>
    </>
  )
}

export default App