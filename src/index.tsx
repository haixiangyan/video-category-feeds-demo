import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';

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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);
