
import { Suspense } from 'react';
import './App.css'
import { HeroSection } from './component/HeroSection';
import { Nav } from './component/Nav';

import TecnologyDetailList from './component/Technology/TecnologyDetailList';
import type { Itecnology } from './type/Tecnology';
import FooteSection from './component/FooteSection';


function App() {
  
  const technologyPromise = async (): Promise<Itecnology[]> => {
    const response = await fetch("/data.json");
    const data = await response.json();
    return data;
  };

  return (
    <>
      <Nav />
      <HeroSection />
      <Suspense fallback={<div>Loading...</div>}>
         <TecnologyDetailList technologyPromise={technologyPromise()} />
      </Suspense>
      <FooteSection />
    </>
  );
}

export default App
