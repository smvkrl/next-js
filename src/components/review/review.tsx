import { cn } from '@/helpers/class-names';
import { ReviewProps } from './review.props';
import styles from './review.module.css';
import Rating from '../rating/rating';
import UserIcon from './user.svg';

function Review({ review, className, ...props }: ReviewProps) {
  const { name, title, description, createdAt, rating } = review;
  return (
    <div className={cn(styles.review, className)} {...props}>
      <UserIcon className={styles.user} />
      <div className={styles.title}>
        <span className={styles.name}>{name}:</span>&nbsp;&nbsp;
        <span>{title}</span>
      </div>
      <div className={styles.date}>
        {new Date(createdAt).toLocaleDateString()}
      </div>
      <div className={styles.rating}>
        <Rating rating={rating} />
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}
export default Review;
