import clsx from "clsx";
import css from "../FriendList/FriendListItem.module.css";

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="70" />
      <p className={css.name}>{name}</p>
      <p className={clsx(isOnline ? css.isOnline : css.isOffline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
