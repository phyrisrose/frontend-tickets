export async function getData(url = '', extraHeaders = {}) {
  const response = await fetch(url, {
    cache: 'no-cache',
    headers: {
      ...extraHeaders,
    },
  });
  return response.json();
}

export async function postData(url = '', data = {}, extraHeaders = {}) {
  const response = await fetch(url, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      ...extraHeaders,
    },
    body: JSON.stringify(data),
  });

  return response.json();
}
