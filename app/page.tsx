import { CityProvider } from '@/app/providers/cityProvider';
import Header from '@/app/components/Header';
import Main from '@/app/components/Main';


export default function Home() {
  return (
    <CityProvider>
      <Header />
      <Main />
    </CityProvider>
  );
};
