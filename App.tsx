import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Services from './components/Services';
import GitHubStats from './components/GitHubStats';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Services />
      <GitHubStats />
      <Contact />
    </Layout>
  );
}

export default App;
