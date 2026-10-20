import { useLoaderData, useOutletContext, Link } from "react-router-dom";
import styles from "../css/ShowDetail.module.css";

export default function ShowDetail() {
  const show = useLoaderData();
  const { watchlist, addToWatchlist } = useOutletContext();
  const saved = watchlist.some((s) => s.id === show.id);
  const summary = show.summary?.replace(/<[^>]+>/g, "") ?? "Tidak ada sinopsis.";

  return (
    <div className={styles.page}>
      <Link to="/shows" className={styles.back}>← Kembali ke Daftar</Link>
      <div className={styles.content}>
        <img className={styles.poster} src={show.image?.medium} alt={show.name} />
        <div className={styles.info}>
          <h1>{show.name}</h1>
          <span className={styles.rating}>★ {show.rating?.average ?? "-"}</span>
          <span className={styles.meta}>
            {show.genres.join(", ")} · Tayang {show.premiered ?? "-"} · {show.status}
          </span>
          <p>{summary}</p>
          <button
            className={styles.addBtn}
            disabled={saved}
            onClick={() => addToWatchlist(show)}
          >
            {saved ? "Sudah di Watchlist" : "+ Tambah ke Watchlist"}
          </button>
        </div>
      </div>
    </div>
  );
}