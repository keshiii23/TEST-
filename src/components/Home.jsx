import { Link } from "react-router-dom";
import styles from "../css/Home.module.css";

export default function Home() {
  return (
    <div className={styles.hero}>
      <h1>CineList</h1>
      <p>Temukan serial TV favoritmu dan simpan ke watchlist.</p>
      <div className={styles.actions}>
        <Link to="/shows" className={styles.primary}>Jelajahi Serial</Link>
        <Link to="/watchlist" className={styles.outline}>Watchlist Saya</Link>
      </div>
    </div>
  );
}