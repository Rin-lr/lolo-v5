// GLOBAL VARIABLES
const feed = document.getElementById("content");
//let all_articles = [];
let isProcessing = false; // Flag to track if processFeedUrls() is running

//let InitUrl = 'https://flipboard.com/@raimoseero/feed-nii8kd0sz.rss';

// Fetches data from a feed URL and parses the XML.
async function fetchAndParse(url) {

    try {
        const response = await fetch('/webparser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                url,
            }),
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch data from ${url}`);
        }

        const data = await response.json();
        //console.log(`Data fetched from ${url}:`, data);

        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');

        // Clear the existing content if the source is empty
        if (!url) {
            feed.innerHTML = '';
        } else {
             feed.innerHTML = '';
            xml(doc);// Update the content
        }

        return doc;
    } catch (error) {
        if (error.name === 'AbortError') {
            console.log('Fetch aborted.'); // Handle the abort case
        } else {
            console.error(`Error fetching data from ${url}:`, error);
            return null;
        }
    }

}
//Go trough localStorage
async function processFeedUrls() {
    
    let src = JSON.parse(localStorage.getItem('feed-source') || '[]');
    if (isProcessing == true) {
        // Process 
        
        const promises = src.map(url => fetchAndParse(url));

        try {
            const results = await Promise.all(promises);
            //console.log('All data fetched:', results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

        // Once processing is done, reset the flag
        isProcessing = false;
    }
}