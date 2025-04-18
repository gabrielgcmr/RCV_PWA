// src/services/icd/icdApi.ts
const TOKEN_URL = 'https://icdaccessmanagement.who.int/connect/token';

export async function fetchIcdToken(): Promise<string> {
  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: import.meta.env.ICD_CLIENT_ID,
      client_secret: import.meta.env.ICD_CLIENT_SECRET,
      scope: 'icdapi_access'
    })
  });
  const json = await res.json();
  return json.access_token;
}
