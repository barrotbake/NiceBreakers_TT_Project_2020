import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.main}>
      <a className="navbar-brand">
        <span> Nice Breakers </span>
      </a>
    </div>
  );
};

export default Navbar;
