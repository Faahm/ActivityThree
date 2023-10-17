import UseUser from "../hooks/UseUser";

/* eslint-disable react/prop-types */
const Component3 = () => {
  const { user } = UseUser();

  return <div>{<p>{user.name}</p>}</div>;
};

export default Component3;
