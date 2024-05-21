import Profile from "./Profile/Profile";
import userData from "../userData.json";
import css from "./App.module.css";
import FriendList from "./FriendList/FriendList";

function App() {
  return (
    <div className={css.container}>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList />
    </div>
  );
}

export default App;
