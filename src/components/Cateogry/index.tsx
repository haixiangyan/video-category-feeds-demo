import {FC} from "react";
import {VideoData} from "../../constants/data";
import styles from './styles.module.scss';

interface Props {
  list: VideoData[];
}

const Category: FC<Props> = (props) => {
  const { list } = props;

  return (
    <div className={styles.category}>
      <ul>
        {list.map(videoData => (
          <li key={videoData.id}>
            <video src={videoData.src}></video>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Category;
