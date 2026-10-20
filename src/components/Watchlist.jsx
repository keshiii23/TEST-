import { useOutletContext, Link } from "react-router-dom";
import styles from "../css/Watchlist.module.css";

export default function Watchlist() {
  const { watchlist, removeFromWatchlist } = useOutletContext();

  return (
    <div className={styles.page}>
      <Link to="/shows" className={styles.back}>← Lanjut Jelajahi</Link>
      <h1>Watchlist Saya</h1>

      {watchlist.length === 0 && (
        <p className={styles.empty}>Watchlist masih kosong.</p>
      )}

      {watchlist.map((show) => (
        <div key={show.id} className={styles.row}>
          <img className={styles.thumb} src={show.image?.medium} alt={show.name} />
          <div className={styles.info}>
            <Link to={`/shows/${show.id}`} className={styles.title}>{show.name}</Link>
            <p className={styles.muted}>{show.genres.join(", ")}</p>
            <p className={styles.muted}>★ {show.rating?.average ?? "-"}</p>
          </div>
          <button className={styles.removeBtn} onClick={() => removeFromWatchlist(show.id)}>
            Remove
          </button>
        </div>
      ))}

      {watchlist.length > 0 && (
        <p className={styles.summary}>Total: {watchlist.length} serial</p>
      )}
    </div>
  );
}