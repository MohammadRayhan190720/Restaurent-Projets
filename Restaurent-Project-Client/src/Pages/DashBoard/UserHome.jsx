import useAuth from "../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>Assalamualikum, Welcome</h2>
      {user?.displayName? `${user.displayName}` : "Back"}
    </div>
  );
};

export default UserHome;
