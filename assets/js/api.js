const urlBase = "../assets/data/";

async function getData(endpoint) {
    let url = urlBase + endpoint;

    try {
        const response = await fetch(url);

        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error ao buscar dados:", error);
        throw error;
    }
}