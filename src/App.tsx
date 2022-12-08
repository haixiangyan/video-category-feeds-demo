import React from 'react';
import NavBar from "./components/NavBar";
import Tabs from "./components/Tabs";
import BannerImage from './assets/banner.png';
import FooterImage from './assets/footer.jpg';
import Category from "./components/Cateogry";

import styles from './styles.module.scss';
import {dataSource} from "./constants/data";

const App = () => {
  return (
    <div className={styles.app}>
      <NavBar />

      <Tabs />

      <div className={styles.line}></div>

      <img className={styles.banner} src={BannerImage} alt="Banner"/>

      <h2>{dataSource.hot.title}</h2>
      <Category list={dataSource.hot.list} />

      <h2>{dataSource.live.title}</h2>
      <Category list={dataSource.live.list} />

      <h2>{dataSource.recommend.title}</h2>
      <Category list={dataSource.recommend.list} />

      <img className={styles.banner} src={FooterImage} alt="Banner"/>

      <footer className={styles.footer}>
        <span>@Bilibili 2022</span>
      </footer>
    </div>
  );
}

export default App;
