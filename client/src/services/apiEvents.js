export async function getEvents() {
  const res = await fetch('/api/events', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!res.ok) {
    throw new Error(`Something went wrong: ${res.status} error.`);
  }
  const data = await res.json();

  return data;
}
