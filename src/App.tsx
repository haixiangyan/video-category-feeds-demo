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
  const offsetRef = useRef<HTMLDivElement>(null);

  const [hidden, setHidden] = useState<boolean>(false);

  const onScroll = () => {
    if (contentRef.current && offsetRef.current) {
      const { bottom: offsetBottom } = offsetRef.current.getBoundingClientRect();

      // 下滑超过 56 px 才做交互
      if (offsetBottom < 0) {
        const { top: newY } = contentRef.current.getBoundingClientRect();

        // 计算向上还是向下滑动
        const delta = newY - oldYRef.current;

        // 更新上一次的 Y 值
        oldYRef.current = newY;

        setHidden(delta < 0);
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
        <div ref={offsetRef} className={styles.offset}/>

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
