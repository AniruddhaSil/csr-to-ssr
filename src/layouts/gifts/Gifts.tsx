import styles from "./gifts.module.css";
import GiftButton from "./Button";

const Gifts = () => {
  return (
    <main className={styles.layout}>
      <GiftButton />
      <div
        style={{
          backgroundColor: "#f6f2f5",
          gridColumnStart: "1",
        }}
      >
        Hey There
      </div>
    </main>
  );
};

export default Gifts;
