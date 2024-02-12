const fetchLooks = async () => {
    return fetch('https://127.0.0.1:8000/looks')
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.error('Erreur lors du chargement du JSON :', error));
  }

  export default fetchLooks; 
