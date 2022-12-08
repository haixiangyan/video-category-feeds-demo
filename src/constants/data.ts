import Video1 from '../assets/1.mp4';
import Video2 from '../assets/2.mp4';
import Video3 from '../assets/3.mp4';
import Video4 from '../assets/4.mp4';
import Video5 from '../assets/5.mp4';
import Video6 from '../assets/6.mp4';
import Video7 from '../assets/7.mp4';
import Video8 from '../assets/8.mp4';
import Video9 from '../assets/9.mp4';

export interface VideoData {
  id: string;
  src: string;
}

const videoList1: VideoData[] = [
  {
    id: '11',
    src: Video1,
  },
  {
    id: '12',
    src: Video2,
  },
  {
    id: '13',
    src: Video3,
  },
  {
    id: '14',
    src: Video4,
  },
  {
    id: '15',
    src: Video5,
  },
]

const videoList2: VideoData[] = [
  {
    id: '21',
    src: Video2,
  },
  {
    id: '22',
    src: Video9,
  },
  {
    id: '23',
    src: Video7,
  },
  {
    id: '24',
    src: Video6,
  },
]

const videoList3: VideoData[] = [
  {
    id: '31',
    src: Video4,
  },
  {
    id: '32',
    src: Video8,
  },
  {
    id: '33',
    src: Video1,
  },
  {
    id: '34',
    src: Video3,
  },
  {
    id: '35',
    src: Video9,
  },
]

export const dataSource = {
  hot: {
    id: 'hot',
    title: '热门',
    list: videoList1,
  },
  recommend: {
    id: 'recommend',
    title: '推荐',
    list: videoList2,
  },
  live: {
    id: 'live',
    title: '直播',
    list: videoList3,
  },
}
