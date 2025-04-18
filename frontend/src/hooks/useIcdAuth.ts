import { useState, useEffect } from 'react';
import { fetchIcdToken } from '@/services/icd/api'; // Ou onde quer que esteja

export function useIcdAuth() {
  const [token, setToken] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetchIcdToken()
      .then(setToken)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []); // Executa só uma vez

  return { token, isLoading, error };
}