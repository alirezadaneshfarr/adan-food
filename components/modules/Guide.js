import Link from "next/link";
import styles from "./Guide.module.scss";

const Guide = () => {
  return (
    <div className={styles.container}>
      <Link href="/menu">Menu</Link>
      <Link href="/categories">Categories</Link>
      <Link href="/">Discount</Link>
    </div>
  );
};

export default Guide;
