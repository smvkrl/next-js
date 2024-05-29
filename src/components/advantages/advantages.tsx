import { AdvantagesProps } from './advantages.props';
import styles from './advantages.module.css';
import CheckIcon from './check.svg';

function Advantages({ advantages }: AdvantagesProps) {
  return (
    <>
      {advantages.map((a) => (
        <div key={a._id} className={styles.advantage}>
          <CheckIcon />
          <div className={styles.title}>{a.title}</div>
          <hr className={styles.vline} />
          <div>{a.description}</div>
        </div>
      ))}
    </>
  );
}
export default Advantages;
