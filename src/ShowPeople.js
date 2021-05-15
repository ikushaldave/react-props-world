function ShowPeople({ people, toggleHandler }) {
	const friends = people.houses.reduce((acc, cv) => {
		return acc.concat(cv.people);
	}, []);

  return (
    <div className="flex">
      {friends.map((people, index) => (
        <div className="people" key={index}>
          <h4>{people.name}</h4>
          <p>{people.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ShowPeople;