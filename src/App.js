import {BrowserRouter,Routes, Route, Outlet} from 'react-router-dom'
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RecipeDetail from './pages/RecipeDetail';

function Layout(){
  return (
    <>
      <Navbar/>
        <Outlet/>
      <Footer/>
    </>
  )
}
function App() {
  return (
    <div className='bg-black'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='recipes/:id' element={<RecipeDetail />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;