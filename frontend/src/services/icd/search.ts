// src/services/idc/search
import { IcdEntity } from "./types";

const BASE_URL = 'https://id.who.int/icd';

export async function searchIcd11(term: string, token: string): Promise<IcdEntity[]> {
  const params = new URLSearchParams({
    q: term,
    flatResults: 'true',
    releaseId: '2022-02'   // ou deixar vazio para buscar na última versão
  });
  const res = await fetch(`${BASE_URL}/entity/search?${params}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'API-Version': 'v2',
      'Accept-Language': 'pt'
    }
  });
  const json = await res.json();
  return json.destinationEntities;
}
