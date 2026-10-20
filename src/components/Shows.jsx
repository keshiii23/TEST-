import { useLoaderData, useSearchParams, useOutletContext, Link } from "react-router-dom";
import styles from "../css/Shows.module.css";

const GENRES = ["Drama", "Comedy", "Action", "Science-Fiction", "Crime"];

export default function Shows() {
  const { shows, genre } = useLoaderData();
  const [, setSearchParams] = useSearchParams();
  const { watchlist, addToWatchlist } = useOutletContext();

  const pickGenre = (g) => (g ? setSearchParams({ genre: g }) : setSearchParams({}));

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.genres}>
          <button
            className={`${styles.genreBtn} ${!genre ? styles.active : ""}`}
            onClick={() => pickGenre(null)}
          >
            All
          </button>
          {GENRES.map((g) => (
            <button
              key={g}
              className={`${styles.genreBtn} ${genre === g ? styles.active : ""}`}
              onClick={() => pickGenre(g)}
            >
              {g}
            </button>
          ))}
        </div>
        <Link to="/watchlist" className={styles.watchLink}>
          Watchlist ({watchlist.length})
        </Link>
      </div>

      {shows.length === 0 && <p className={styles.empty}>Tidak ada serial untuk genre ini.</p>}

      <ul className={styles.grid}>
        {shows.map((show) => {
          const saved = watchlist.some((s) => s.id === show.id);
          return (
            <li key={show.id} className={styles.card}>
              <img
                className={styles.poster}
                src={show.image?.medium}
                alt={show.name}
              />
              <Link to={`/shows/${show.id}`} className={styles.name}>{show.name}</Link>
              <span className={styles.rating}>★ {show.rating?.average ?? "-"}</span>
              <span className={styles.meta}>{show.genres.join(", ")}</span>
              <button
                className={styles.addBtn}
                disabled={saved}
                onClick={() => addToWatchlist(show)}
              >
                {saved ? "Di Watchlist" : "+ Watchlist"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}