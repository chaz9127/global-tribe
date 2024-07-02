import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.scss'
import Nav from './components/Nav/Nav.tsx';
import Footer from './components/Footer/Footer.tsx';
import About from './pages/About/About.tsx';


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
  },{
    path: "/about",
    element: (
      <>
        <Nav />
        <About />
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
