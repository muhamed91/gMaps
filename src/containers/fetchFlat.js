
const API_URL = 'http://localhost:3000/flats.json';

async function fetchFlat() {
    const url = API_URL;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

export default fetchFlat