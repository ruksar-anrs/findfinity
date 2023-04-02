import { useState, useEffect } from 'react';

const User = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api');
      const data = await response.json();
      setUserData(data.results[0]);
      localStorage.setItem('userData', JSON.stringify(data.results[0]));
    } catch (error) {
      console.error(error);
    }
  };

  const handleRefresh = () => {
    fetchData();
  };
  
  const {name, email} = userData ?? {}
  return (
    <div>
      {userData && (
        <div>
          <p>Name: {name.title+" "+name.first+" "+name.last}</p>
          <p>Email: {email}</p>
        </div>
      )}
      <button style={{cursor:"pointer"}} onClick={handleRefresh}>Refresh</button>
    </div>
  );
};

export default User;