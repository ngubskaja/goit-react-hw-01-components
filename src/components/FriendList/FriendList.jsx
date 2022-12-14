import { FriendListItem } from "./FriendlistItem";
import PropTypes from "prop-types";
import css from '../FriendList/FriendList.module.css';


export const FriendList = ({friends}) => {
    return(
        <ul className={css.friend_list}>
            {friends.map(({ id, avatar, name, isOnline }) =>
                <FriendListItem key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline} />)}
        </ul>
    )  
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool,
        id: PropTypes.number.isRequired,
    })),
};


/* <ul className="friend-list">
  <li className="item">
  <span className="status"></span>
  <img className="avatar" src="" alt="User avatar" width="48" />
  <p className="name"></p>
</li>
</ul> */