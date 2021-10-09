import { useEffect, useState } from 'react';
import { getAuthStatus } from '../api';
import { User } from '../types';

export function useFetchUser() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User>();
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    getAuthStatus()
      .then(({ data }) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(() => setTimeout(() => setLoading(false), 1000));
  }, []);

  return { user, loading, error };
}
