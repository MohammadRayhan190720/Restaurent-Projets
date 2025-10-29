
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../hooks/useAuth'
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { FaDollarSign, FaIcons, FaUser } from 'react-icons/fa';
import { FaFirstOrder } from 'react-icons/fa6';

const AdminHome = () => {
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data : stats, isLoading, isError,error } = useQuery({
    queryKey:['admin-stats'],
    queryFn: async () =>{
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    }
  })
  // if(isLoading){
  //   <span className="loading loading-infinity loading-xl"></span>;
  // }else if(isError){
  //   console.log('Error fatching stats', error)
  // }else{
  //   console.log('stats',stats)
  // }


  return (
    <div>
      <h2 className='text-3xl font-mono my-5'>
        Assalamualikum, Welcome
        {user?.displayName ? `${user.displayName}` : "Back"}
      </h2>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaDollarSign className='text-3xl'></FaDollarSign>    
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">Loading...</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUser></FaUser>
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">
            {isLoading && <p>Loading...</p>}
            {stats && <p>{stats.users}</p>}
          </div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
           <FaIcons></FaIcons>
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">
            {isLoading && <p>Loading...</p>}
            {stats && <p>{stats.menuItem}</p>}
          </div>{" "}
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaFirstOrder></FaFirstOrder>
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">
           loading...
          </div>{" "}
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;