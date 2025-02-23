import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreShoe from '../../components/ExploreShoe/ExploreShoe';
import ShoeDisplay from '../../components/ShoeDisplay/ShoeDisplay';
import Banner from '../../components/banner/banner';
import Banner1 from '../../components/banner1/banner1';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreShoe category={category} setCategory={setCategory} />
      <ShoeDisplay category={category} />
      <Banner />
      <Banner1 />
      <AppDownload />
    </div>
  );
}

export default Home;
