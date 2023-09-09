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

export async function getEvent(id) {
  const res = await fetch(`/api/events/${id}`);

  if (!res.ok) {
    throw new Error(`Something went wrong: ${res.status} error.`);
  }

  const data = await res.json();

  return data;
}

export async function createEvent(event) {
  const res = await fetch('/api/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  });

  if (!res.ok) {
    throw new Error(`Oops! Request failed with status code: ${res.status}`);
  }

  const data = await res.json();

  return data;
}
