import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function App() {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (show) => {
    setWatchlist((prev) =>
      prev.some((s) => s.id === show.id) ? prev : [...prev, show]
    );
  };
  const removeFromWatchlist = (id) => {
    setWatchlist((prev) => prev.filter((s) => s.id !== id));
  };

  return <Outlet context={{ watchlist, addToWatchlist, removeFromWatchlist }} />;
}