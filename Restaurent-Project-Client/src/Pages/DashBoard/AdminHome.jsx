
import useAuth from '../../hooks/useAuth'

const AdminHome = () => {
  const {user} = useAuth();

  return (
    <div>
      <h2>Assalamualikum, Welcome</h2>
      {
        user? `${user.name}` : "Back"
      }
      
    </div>
  );
};

export default AdminHome;