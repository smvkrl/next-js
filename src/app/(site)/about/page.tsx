import Htag from '@/components/Htag/Htag';
import { EHtag } from '../../../enums/EHtag';

export default function Home() {
  return (
    <main>
      <Htag tag={EHtag.H1}>About</Htag>
    </main>
  );
}
