import { cn } from '@/helpers/class-names';
import Button from '../button/button';
import Input from '../input/input';
import Textarea from '../text-area/textarea';
import styles from './review-form.module.css';
import { ReviewFormProps } from './review-form.props';
import CloseIcon from './close.svg';
import { FormEventHandler } from 'react';

function ReviewForm({ className, ...props }: ReviewFormProps) {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          // {...register('name', {
          //   required: { value: true, message: 'Заполните имя' },
          // })}
          placeholder="Имя"
          // error={errors.name}
          // tabIndex={isOpened ? 0 : -1}
          // aria-invalid={errors.name ? true : false}
        />
        <Input
          // {...register('title', {
          //   required: { value: true, message: 'Заполните заголовок' },
          // })}
          placeholder="Заголовок отзыва"
          className={styles.title}
          // error={errors.title}
          // tabIndex={isOpened ? 0 : -1}
          // aria-invalid={errors.title ? true : false}
        />
        <div className={styles.rating}>
          <span>Оценка:</span>
          {/* <Controller
						control={control}
						name='rating'
						rules={{ required: { value: true, message: 'Укажите рейтинг' } }}
						render={({ field }) => (
							<Rating
								isEditable
								rating={field.value}
								ref={field.ref}
								setRating={field.onChange}
								error={errors.rating}
								tabIndex={isOpened ? 0 : -1}
							/>
						)}
					/> */}
        </div>
        <Textarea
          // {...register('description', {
          //   required: { value: true, message: 'Заполните описание' },
          // })}
          placeholder="Текст отзыва"
          className={styles.description}
          // error={errors.description}
          // tabIndex={isOpened ? 0 : -1}
          aria-label="Текст отзыва"
          // aria-invalid={errors.description ? true : false}
        />
        <div className={styles.submit}>
          <Button>Отправить</Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>

      <div className={cn(styles.success, styles.panel)} role="alert">
        <div className={styles.successTitle}>Ваш отзыв отправлен</div>
        <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
        <button className={styles.close} aria-label="Закрыть оповещение">
          <CloseIcon />
        </button>
      </div>
      <div className={cn(styles.error, styles.panel)} role="alert">
        Что-то пошло не так, попробуйте обновить страницу
        <button className={styles.close} aria-label="Закрыть оповещение">
          <CloseIcon />
        </button>
      </div>
    </form>
  );
}
export default ReviewForm;
