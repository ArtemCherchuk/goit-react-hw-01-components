import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const productBg = isOnline ? 'green' : 'red';
  const productStyles = {
    backgroundColor: productBg,
  };

  return (
    <li className={css.item}>
      <span className={css.status} style={productStyles}>
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
