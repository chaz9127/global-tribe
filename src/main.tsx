import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './pages/App.tsx'
import Nav from './components/Nav/Nav.tsx';
import Footer from './components/Footer/Footer.tsx';
import About from './pages/About/About.tsx';
import Contact from './pages/Contact/Contact.tsx';
import './index.scss'


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Nav />
        <App/>
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Nav />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Nav />
        <Contact />
        <Footer />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
