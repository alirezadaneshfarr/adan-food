import Card from "../modules/Card";
import styles from "./MenuPage.module.scss";

const MenuPage = ({ data }) => {
  return (
    <div className={styles.container}>
      <h3>Menu</h3>
      <div className={styles.menuBar}>
        {data.map((food) => (
          <Card key={food.id} {...food} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
