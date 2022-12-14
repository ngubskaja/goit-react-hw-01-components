import PropTypes from "prop-types";
import css from '../Profile/Profile.module.css';

export const Profile = ({username, tag, location, avatar, stats}) => {
  return (
  <div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.list}>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li className={css.list}>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{stats.views}</span>
    </li>
    <li className={css.list}>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>)
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired, 
    views: PropTypes.number.isRequired, 
    likes: PropTypes.number.isRequired,
}).isRequired
};


// "username": "Jacques Gluke",
//     "tag": "jgluke",
//     "location": "Ocho Rios, Jamaica",
//     "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//     "stats": {
//       "followers": 5603,
//       "views": 4827,
//       "likes": 1308