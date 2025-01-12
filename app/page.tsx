import Header from '@/app/components/Header';
import { CityProvider } from '@/app/providers/cityProvider';


export default function Home() {
  return (
    <CityProvider>
      <Header />
    </CityProvider>
  );
};
