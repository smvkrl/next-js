import { ForwardedRef, forwardRef } from 'react';
import { InputProps } from './input.props';
import styles from './input.module.css';
import { cn } from '@/helpers/class-names';

function Input(
  { className, error, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
): JSX.Element {
  const isError = error ? true : false;
  return (
    <div className={cn(className, styles.inputWrapper)}>
      <input
        className={cn(styles.input, [styles.error, isError])}
        ref={ref}
        {...props}
      />
      {error && (
        <span role="alert" className={styles.errorMessage}>
          {error.message}
        </span>
      )}
    </div>
  );
}

export default forwardRef(Input);
