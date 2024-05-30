import currencyFormatter from '@/helpers/currency-formatter';
import styles from './hh-card.module.css';
import RateIcon from './rate.svg';
import { cn } from '@/helpers/class-names';
import { IHhData } from '@/interfaces/page.interface';

function HhCard({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
}: IHhData): JSX.Element {
  return (
    <div className={styles.hh}>
      <div className={cn([styles.count, styles.card])}>
        <div className={styles.title}>Всего вакансий</div>
        <div className={styles.countValue}>{count}</div>
      </div>
      <div className={cn([styles.salary, styles.card])}>
        <div>
          <div className={styles.title}>Начальный</div>
          <div className={styles.salaryValue}>
            {currencyFormatter(juniorSalary)}
          </div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon />
            <RateIcon />
          </div>
        </div>
        <div>
          <div className={styles.title}>Средний</div>
          <div className={styles.salaryValue}>
            {currencyFormatter(middleSalary)}
          </div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
            <RateIcon />
          </div>
        </div>
        <div>
          <div className={styles.title}>Профессионал</div>
          <div className={styles.salaryValue}>
            {currencyFormatter(seniorSalary)}
          </div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HhCard;
