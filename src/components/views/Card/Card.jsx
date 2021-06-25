// Style
import classes from "./Card.module.scss";

const Card = ({ title, location, email, gender, image }) => (
  <section className={classes.card}>
    <img className={classes.cardImage} src={image} alt={title} />

    <div className={classes.cardContent}>
      <h3 className={classes.cardTitle}>{title}</h3>
      <span className={classes.cardLocation}>{location}</span>

      <div className={classes.cardContact}>
        <span className={classes.cardMail}>{`email: ${email}`}</span>
        <span className={classes.cardGender}>{`gender: ${gender}`}</span>
      </div>
    </div>
  </section>
);

export default Card;
