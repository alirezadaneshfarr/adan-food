import styles from "./DetailsPage.module.scss";
import Location from "../icons/Location";

const DetailsPage = (props) => {
  const {
    id,
    name,
    price,
    discount,
    introduction,
    details,
    ingredients,
    recipe,
  } = props;

  return (
    <div className={styles.container}>
      <h2>Details</h2>
      <div className={styles.subContainer}>
        <div className={styles.banner}>
          <img src={`/images/${id}.jpeg`} alt="Image" />
          <div>
            <h3>{name}</h3>
            <span className={styles.location}>
              <Location />
              {details[0].Cuisine}
            </span>
            <span className={styles.price}>
              {discount ? (price * (100 - discount)) / 100 : price} $
              {discount ? (
                <span className={styles.discount}>{discount}% OFF</span>
              ) : null}
            </span>
          </div>
        </div>
        <div className={styles.introduction}>
          <p>{introduction}</p>
        </div>
        <div className={styles.details}>
          <h4>Details</h4>
          <ul>
            {details.map((detail, index) => (
              <li key={index}>
                <p>{Object.keys(detail)[0]}: </p>
                <span>{Object.values(detail)[0]}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.details}>
          <h4>Ingredients</h4>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.recipe}>
          <h4>Recipe</h4>
          {recipe.map((item, index) => (
            <div key={index} className={index % 2 ? styles.odd : styles.even}>
              <span>{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <button className={styles.button}>Add To Cart</button>
    </div>
  );
};

export default DetailsPage;
