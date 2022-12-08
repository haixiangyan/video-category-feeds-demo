import React from 'react';
import NavBar from "./components/NavBar";
import Tabs from "./components/Tabs";
import BannerImage from './assets/banner.png';
import FooterImage from './assets/footer.jpg';
import Category from "./components/Cateogry";

const App = () => {
  return (
    <div className="App">
      <NavBar />

      <Tabs />

      <img src={BannerImage} alt="Banner"/>

      <h2>热门</h2>
      <Category />

      <h2>直播</h2>
      <Category />

      <h2>推荐</h2>
      <Category />

      <img src={FooterImage} alt="Banner"/>

      <footer>
        <span>@Bilibili 2022</span>
      </footer>
    </div>
  );
}

export default App;
