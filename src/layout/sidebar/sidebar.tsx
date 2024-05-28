import { HTMLAttributes } from 'react';
import Menu from '@/components/menu/menu';

function Sidebar({ ...props }: HTMLAttributes<HTMLDivElement>) {
  return <Menu {...props} />;
}

export default Sidebar;
