import { cn } from '@/helpers/class-names';
import styles from './button-icon.module.css';
import UpIcon from './up.svg';
import CloseIcon from './close.svg';
import MenuIcon from './menu.svg';
import { ButtonIconProps } from './button-icon.props';
import { EIconType, EIconView } from '@/enums/icon-type';

function ButtonIcon({ view, icon, className, ...props }: ButtonIconProps) {
  const getIcon = ((iconType: EIconType) => {
    switch (iconType) {
      case EIconType.Close:
        return <CloseIcon />;
      case EIconType.Menu:
        return <MenuIcon />;
      case EIconType.Up:
        return <UpIcon />;
    }
  })(icon);
  return (
    <button
      className={cn(
        className,
        styles.button,
        [styles.primary, view == EIconView.Primary],
        [styles.white, view == EIconView.White],
      )}
      {...props}
    >
      {getIcon}
    </button>
  );
}
export default ButtonIcon;
