import Htag from '@/components/htag/htag';
import Ptag from '@/components/ptag/ptag';
import { EHtag } from '@/enums/htag';
import currencyFormatter from '@/helpers/currency-formatter';

function Page({ params }: { params: { type: string } }) {
  const { type } = params;
  return (
    <>
      <Htag tag={EHtag.H2}>
        {`${type.at(0)?.toUpperCase()}${type.slice(1)}`}
      </Htag>
      <Ptag>{currencyFormatter(1000)}</Ptag>
    </>
  );
}

export default Page;
