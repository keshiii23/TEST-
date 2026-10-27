import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import Shows from "./components/Shows.jsx";
import ShowDetail from "./components/ShowDetail.jsx";
import Watchlist from "./components/Watchlist.jsx";
import NotFound from "./components/NotFound.jsx";

const showsLoader = async ({ request }) => {
  const genre = new URL(request.url).searchParams.get("genre");
  const res = await fetch("https://api.tvmaze.com/shows?page=0");
  if (!res.ok) throw new Response("Gagal memuat data", { status: res.status });
  const all = await res.json();
  const filtered = genre ? all.filter((s) => s.genres.includes(genre)) : all;
  return { shows: filtered.slice(0, 24), genre };
};

const detailLoader = async ({ params }) => {
  const res = await fetch(`https://api.tvmaze.com/shows/${params.showId}`);
  if (!res.ok) throw new Response("Show not found", { status: 404 });
  return res.json();
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "shows", element: <Shows />, loader: showsLoader },
      { path: "shows/:showId", element: <ShowDetail />, loader: detailLoader },
      { path: "watchlist", element: <Watchlist /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

/* Contoh Penambahan */
