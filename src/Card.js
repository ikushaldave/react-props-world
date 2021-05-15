export default function Card({userInfo}) {
  return (
		<div className="card">
			<div className="card-info">
			  <img src={userInfo.avatarURL} alt="Avatar" style={{ width: "50%", height: "50%" }} />
				<h4>
					<b>{userInfo.name}</b>
				</h4>
			</div>
				<p>{userInfo.description}</p>
		</div>
  );
}
