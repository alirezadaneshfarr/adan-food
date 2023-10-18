import styles from "./Attributes.module.scss";
import Fast from "../icons/Fast";
import Choice from "../icons/Choice";
import Clock from "../icons/Clock";
import Food from "../icons/Food";

const Attributes = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ask}>Why Us?</div>
      <div className={styles.subContainer}>
        <div>
          <Fast />
          <p>Fast</p>
        </div>
        <div>
          <Choice />
          <p>Your Choice</p>
        </div>
        <div>
          <Food />
          <p>Best Restaurants</p>
        </div>
        <div>
          <Clock />
          <p>24-7</p>
        </div>
      </div>
    </div>
  );
};

export default Attributes;
