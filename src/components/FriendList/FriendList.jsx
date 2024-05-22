import css from "../FriendList/FriendList.module.css";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(({ name, isOnline, avatar, id }) => (
        <li key={id} className={css.item}>
          <FriendListItem name={name} isOnline={isOnline} avatar={avatar} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
