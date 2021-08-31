const People = (props) => {
  const { name, gender, birthYear, mass } = props;
  return (
    <tr>
      <td>{name}</td>
      <td>{gender}</td>
      <td>{birthYear}</td>
      <td>{mass}</td>
    </tr>
  );
};

export default People;
