import styles from "./style.module.css";
const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div class="three-body__dot"></div>
      <div class="three-body__dot"></div>
      <div class="three-body__dot"></div>
    </div>
  );
};
export default Loader()