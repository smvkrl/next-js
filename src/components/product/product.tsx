import { ForwardedRef, forwardRef, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { declOfNum } from '@/helpers/decl-num';

import { EArrDirection } from '@/enums/arr-direction';
import { EColor } from '@/enums/color';
import { EView } from '@/enums/view';

import Button from '../button/button';
import currencyFormatter from '@/helpers/currency-formatter';
import Divider from '../divider/divider';
import Rating from '../rating/rating';
import Review from '../review/review';
import ReviewForm from '../review-form/review-form';
import Tag from '../tag/tag';

import { ProductProps } from './product.props';
import styles from './product.module.css';

function Product(
  { product, className, ...props }: ProductProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const [isReviewOpened, setIsReviewOpened] = useState(false);
  const reviewRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    reviewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    reviewRef.current?.focus();
  }, [isReviewOpened]);

  const handleOpenReview = () => {
    setIsReviewOpened(!isReviewOpened);
  };

  const scrollToReview = () => {
    setIsReviewOpened(true);
  };

  return (
    <article className={className} {...props} ref={ref}>
      <div className={styles.product}>
        <div className={styles.head}>
          <Image
            className={styles.logo}
            src={product.image}
            alt={product.title}
            width={70}
            height={70}
          />
          <div className={styles.title}>{product.title}</div>
          <div className={styles.tags}>
            {product.categories.map((c) => (
              <Tag key={c} className={styles.category} color={EColor.Grey}>
                {c}
              </Tag>
            ))}
          </div>
        </div>

        <div className={styles.score}>
          <div className={styles.price}>
            <span>
              <span className="visuallyHidden">цена </span>
              {currencyFormatter(product.price)}
            </span>
            {product.oldPrice && (
              <Tag className={styles.oldPrice} color={EColor.Green}>
                <span className="visuallyHidden">скидка </span>
                {currencyFormatter(product.price - product.oldPrice)}
              </Tag>
            )}
          </div>
          <div className={styles.credit}>
            <span className="visuallyHidden">кредит </span>
            {currencyFormatter(product.credit)}/
            <span className={styles.month}>мес</span>
          </div>
          <div className={styles.rating}>
            <span className="visuallyHidden">
              {'рейтинг ' + (product.reviewAvg ?? product.initialRating)}
            </span>
            <Rating rating={product.reviewAvg ?? product.initialRating} />
          </div>
          <div className={styles.priceTitle} aria-hidden={true}>
            цена
          </div>
          <div className={styles.creditTitle} aria-hidden={true}>
            кредит
          </div>
          <div className={styles.rateTitle}>
            <a href="#reviews" onClick={scrollToReview}>
              {product.reviewCount}{' '}
              {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
            </a>
          </div>
        </div>
        <Divider className={styles.hr} />
        <div className={styles.description}>{product.description}</div>
        <div className={styles.feature}>
          {product.characteristics.map((c) => (
            <div className={styles.characteristics} key={c.name}>
              <span className={styles.characteristicsName}>{c.name}</span>
              <span className={styles.characteristicsDots}></span>
              <span className={styles.characteristicsValue}>{c.value}</span>
            </div>
          ))}
        </div>
        <div className={styles.advBlock}>
          {product.advantages && (
            <div className={styles.advantages}>
              <div className={styles.advTitle}>Преимущества</div>
              <div>{product.advantages}</div>
            </div>
          )}
          {product.disadvantages && (
            <div className={styles.disadvantages}>
              <div className={styles.advTitle}>Недостатки</div>
              <div>{product.disadvantages}</div>
            </div>
          )}
        </div>
        <Divider className={styles.hr} />
        <div className={styles.actions}>
          <Button view={EView.Primary}>Узнать подробнее</Button>
          <Button
            view={EView.Ghost}
            arrow={isReviewOpened ? EArrDirection.Down : EArrDirection.Right}
            className={styles.reviewButton}
            onClick={handleOpenReview}
          >
            Читать отзывы
          </Button>
        </div>
      </div>

      {isReviewOpened ? (
        <div className={styles.reviews} ref={reviewRef}>
          {product.reviews.map((r) => (
            <article key={r._id}>
              <Review review={r} />
              <Divider />
            </article>
          ))}
          <ReviewForm productId={product._id} isOpened={isReviewOpened} />
        </div>
      ) : null}
    </article>
  );
}
export default motion(forwardRef(Product));
