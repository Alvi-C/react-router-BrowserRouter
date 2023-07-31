import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import ProductPage from "./pages/ProductPage.jsx"
import NotFoundPage from "./pages/NotFoundPage.jsx"
function App() {


  return (
    <>
      <h1 className='text-3xl font-bold underline text-center mb-10 mt-5'>
        React Router DOM
      </h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product/:id/:name" element={<ProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
