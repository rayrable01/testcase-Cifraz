import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { MainProvider} from './Provider/MainContext'
import { BookList } from './ui/BookList/BookList'
import { Favorites } from './ui/Favorites/Favorites'


function App() {
  return (
    <MainProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BookList />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </MainProvider>
  )
}

export default App
