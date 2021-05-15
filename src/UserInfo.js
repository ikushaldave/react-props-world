export default function UserInfo(props) {
  return (
    <div className="user-info">
      <img
        className="user-avatar"
        src={props.data.avatarURL}
        width="50"
        height="50"
        alt="User Avatar"
      />
      <p>{props.data.name}</p>
    </div>
  );
}
