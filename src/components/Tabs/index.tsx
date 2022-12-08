import {FC} from "react";
import styles from './styles.module.scss';

const Tabs: FC = () => {
  return (
    <ul className={styles.tabs}>
      <li>大会员</li>
      <li>消息</li>
      <li>动态</li>
    </ul>
  )
}

export default Tabs;
