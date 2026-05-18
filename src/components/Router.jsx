import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
//import des pages(Home,About,Hosting,Error)

const Layout = () => {
    return (
        <>
        {/*<Header/>*/}
        <main>
            <Outlet /> {/* ici y'aura les pages*/}
        </main>
        {/*<Footer/>*/}
        </>
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