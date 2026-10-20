import { Link } from "react-router-dom";
import styles from "../css/NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <h1>404 - Halaman Tidak Ditemukan</h1>
      <p>Halaman atau serial yang kamu cari tidak ada.</p>
      <Link to="/" className={styles.link}>Kembali ke Home</Link>
    </div>
  );
}