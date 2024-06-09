import { ForwardedRef, forwardRef } from 'react';
import styles from './textarea.module.css';
import { TextAreaProps } from './textarea.props';
import { cn } from '@/helpers/class-names';

function Textarea(
  { error, className, ...props }: TextAreaProps,
  ref: ForwardedRef<HTMLTextAreaElement>,
) {
  return (
    <div className={cn(className, styles.textareaWrapper)}>
      <textarea
        className={cn(styles.textarea, [styles.error, Boolean(error)])}
        ref={ref}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error?.message}</span>}
    </div>
  );
}
export default forwardRef(Textarea);
