export function findAll(type) {
  return fetch(`/${type}s.json`).then((response) => {
    return response.json().then((suggestions) => {
      return suggestions;
    });
  });
}
