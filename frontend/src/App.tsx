'use client';
import Header from './components/headers/header';
import Footer from './components/footer/footer';
import LandingPageLayout  from './components/layout/landingPageLayout';
import Hero from './components/landPageComponents/hero';

function App() {

  return (
    <>
      <Header />
        <LandingPageLayout>
          <Hero />
        </LandingPageLayout>
      <Footer />
    </>
  )
}

export default App
