import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <nav>
      <ul className={styles.sidebar}>
        <li>School</li>
        <li>Menu</li>
        <li>About</li>
      </ul>
    </nav>
  );
}
export default Sidebar;
