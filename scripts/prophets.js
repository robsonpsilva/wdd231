const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(url)
{
    try
    {
        const response = await fetch(url);
        if (!response.ok)
        {
            throw new Error(`Error: ${response.status}`)
        }
        const data = await response.json();
        console.table(data); 
        return data;

    }
    catch(error)
    {
        console.error('Error fetching data:', error);  
    }
    
}

getProphetData(url).then(data => {

})