import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { MainProvider} from './Provider/MainContext'
import { UsersList } from './ui/UsersList/UsersList'


function App() {
  return (
    <MainProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UsersList />} />
        </Routes>
      </BrowserRouter>
    </MainProvider>
  )
}

export default App
