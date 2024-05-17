import Htag from '@/components/htag/htag';
import { EHtag } from '../../../enums/htag';

export default function Home() {
  return (
    <main>
      <Htag tag={EHtag.H1}>About</Htag>
    </main>
  );
}
