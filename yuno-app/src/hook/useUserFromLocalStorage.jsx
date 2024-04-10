import { useState, useEffect } from 'react';
import { getUserFromLocalStorage } from "../components/localStorage";

const useUserFromLocalStorage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userFromLocalStorage = getUserFromLocalStorage();
    setUser(userFromLocalStorage);
  }, []);

  return user;
};

export default useUserFromLocalStorage;
