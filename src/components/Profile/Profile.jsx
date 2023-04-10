import css from './Profile.module.css';

const Profile = ({username, tag, location, avatar, stats}) => {
  return (
  <div className={css.profile}> 
    <div className="description">
      <img
        src={avatar}
        alt="User avatar"
        className="avatar"
      />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
  
    <ul className={css.stats}>
      <li className={css.listItem}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li className={css.listItem}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li className={css.listItem}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
  );
}

export default Profile;