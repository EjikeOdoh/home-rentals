import React from 'react';
import Input from './components/Input';
import Header from './components/Header';
import Footer from './components/Footer';
import './home.css';
import SectionFour from './UI/sectionFour';
import SectionThree from './UI/SectionThree';
import SectionTwo from './UI/SectionTwo';
import { formFields } from './data';
import Comment from './components/Comment';
const Home = () => {
  return (
    <div>
      <Header />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <section></section>
      <Comment />
      <Footer />
    </div>
  );
};

export default Home;
