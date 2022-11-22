import React, { Suspense } from 'react';

import Loading from './components/Loader';

const About = React.lazy(() => import("./components/About"));
const BackToTop = React.lazy(() =>  import("./components/BackToTop"));
const Contact = React.lazy(() =>   import("./components/Contact"));
const Home = React.lazy(() =>   import("./components/Home"));
const Navbar = React.lazy(() =>   import("./components/Navbar"));
const Skills = React.lazy(() =>   import("./components/Skills"));
const Work = React.lazy(() =>   import("./components/Work"));



function App() {
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <Navbar />
        <BackToTop/>
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
