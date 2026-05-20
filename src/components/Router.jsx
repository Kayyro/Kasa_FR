import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Logement from '../pages/Logement';
import About from '../pages/About';

const Layout = () => {
  return (
    <div className="kasa-layout">
      <Header />
      <main className="kasa-main-content">
        <Outlet /> {}
      </main>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error>Page 404 (Erreur)</Error>,
    children: [
      {
        path: "/",
        element: <Home>Page d'accueil (Home)</Home>,
      },
      {
        path: "/about",
        element: <About>À Propos (About)</About>,
      },
      {
        path: "/logement/:id",
        element: <Logement />,
      }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}