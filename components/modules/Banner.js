import Link from "next/link";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>Adan Food</h2>
        <p>Food Delivery and Takeout!</p>
        <span>
          Adan Food is an online food ordering and delivery platform launched by
          Uber in 2014. Meals are delivered by couriers using cars, scooters,
          bikes, or on foot.
        </span>
        <Link href="/menu">See All</Link>
      </div>
      <div className={styles.right}>
        <img src="/images/banner.png" alt="food" />
      </div>
    </div>
  );
};

export default Banner;
