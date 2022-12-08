import React, {useRef, useState} from 'react';
import NavBar from "./components/NavBar";
import Tabs from "./components/Tabs";
import BannerImage from './assets/banner.png';
import FooterImage from './assets/footer.jpg';
import Category from "./components/Cateogry";

import styles from './styles.module.scss';
import {dataSource} from "./constants/data";
import classNames from "classnames";

// 1. 可以显示和隐藏的 NavBar
//  1.1 往下滚动，则隐藏
//  1.2 往上滚动，则展示
// 2. 可以吸底的 Tabs
// 3. 视频流
//   3.1 命中红线，会播放
//   3.2 未命中红线，播放上一次播放的视频
//   3.3 滚动时，暂停视频
//   3.4 初始时，播放头两个视频
//   3.5 横向滚动时，在可视窗口时播放

const App = () => {
  const oldYRef = useRef<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const [hidden, setHidden] = useState<boolean>(false);

  const onScroll = () => {
    if (contentRef.current) {
      const { top: newY } = contentRef.current.getBoundingClientRect();

      const delta = newY - oldYRef.current;

      oldYRef.current = newY;

      if (delta < 0) {
        // 隐藏
        setHidden(true);
      } else {
        // 显示
        setHidden(false);
      }
    }
  };

  return (
    <div className={styles.app}>
      <header className={classNames(styles.header, { [styles.hidden]: hidden })}>
        <NavBar title="首页" />

        <Tabs />
      </header>

      <div className={styles.line}></div>

      <div className={styles.scrollView} onScroll={onScroll}>
        <img className={styles.banner} src={BannerImage} alt="Banner"/>

        <div ref={contentRef} className={styles.content}>
          <h2>{dataSource.hot.title}</h2>
          <Category list={dataSource.hot.list} />

          <h2>{dataSource.live.title}</h2>
          <Category list={dataSource.live.list} />

          <h2>{dataSource.recommend.title}</h2>
          <Category list={dataSource.recommend.list} />
        </div>

        <img className={styles.banner} src={FooterImage} alt="Banner"/>

        <footer className={styles.footer}>
          <span>@Bilibili 2022</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
