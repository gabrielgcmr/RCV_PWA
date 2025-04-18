import { useState, useEffect } from 'react';
import useDebounce from './useDebouce';
import { IcdEntity } from '@/services/icd/types';
import { searchIcd11 } from '@/services/icd/search';

export function useIcdSearch(token: string | undefined) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<IcdEntity[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedQuery = useDebounce(query, 500); // Debounce de 500ms

  useEffect(() => {
    if (token && debouncedQuery.length >= 3) {
      setIsLoading(true);
      searchIcd11(debouncedQuery, token)
        .then(setResults)
        .catch(console.error) // Adiciona tratamento de erro
        .finally(() => setIsLoading(false));
    } else {
      setResults([]); // Limpa resultados se query for curta ou não houver token
    }
  }, [debouncedQuery, token]);

  return { query, setQuery, results, isLoading };
}