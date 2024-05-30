import Loupe from './loupe.svg';
import styles from './search.module.css';

function Search() {
  return (
    <div className={styles.search}>
      <Loupe />
      <span> Search</span>
    </div>
  );
}
export default Search;
