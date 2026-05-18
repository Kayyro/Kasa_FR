import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="kasa-layout">
      <Header />
      <main className="kasa-main-content">
        <Outlet /> {/* Tes pages (Home, About, etc.) s'injectent ici */}
      </main>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Page 404 (Erreur)</div>, // a remplacer par mon composent error
    children: [
      {
        path: "/",
        element: <div>Page d'accueil (Home)</div>, // a remplacer <Home />
      },
      {
        path: "/about",
        element: <div>À Propos (About)</div>, // a remplacer par <About />
      },
      {
        path: "/logement/:id",
        element: <div>Détail du logement</div>, // a remplacer par <Housing />
      }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}