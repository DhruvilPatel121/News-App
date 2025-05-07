// const API_KEY = 'API_KEY';
// const BASE_URL = 'https://newsapi.org/v2';

// export const fetchNews = async (category = 'general') => {
//     try {
//         const response = await fetch(
//             `${BASE_URL}/top-headlines?country=us&category=${category}&pageSize=100&apiKey=${API_KEY}`
//             // `${BASE_URL}/everything?q=rajkot&apiKey=${API_KEY}`
//         );
//         const data = await response.json();
        
//         return data.articles.map(article => ({
//             title: article.title,
//             description: article.description || 'No description available',
//             image: article.urlToImage || 'https://via.placeholder.com/800x400?text=No+Image',
//             time: new Date(article.publishedAt).toLocaleString(),
//             category: category.charAt(0).toUpperCase() + category.slice(1),
//             url: article.url
//         }));
//     } catch (error) {
//         console.error('Error fetching news:', error);
//         return [];
//     }
// };





























// const API_KEY = 'API_KEY';
// const BASE_URL = 'https://newsapi.org/v2';

// export const fetchNews = async (params) => {
//     try {
//         let url;
//         let category = '';
//         if (typeof params === 'string') {
//             category = params;
//             url = `${BASE_URL}/top-headlines?country=us&category=${params}&pageSize=100&apiKey=${API_KEY}`;
//         } else if (params.query) {
//             url = `${BASE_URL}/everything?q=${params.query}&pageSize=100&sortBy=relevancy&apiKey=${API_KEY}`;
//         } else {
//             url = `${BASE_URL}/top-headlines?country=us&pageSize=100&apiKey=${API_KEY}`;
//         }

//         const response = await fetch(url);
//         const data = await response.json();
        
//         return data.articles.map(article => ({
//             title: article.title,
//             description: article.description || 'No description available',
//             image: article.urlToImage || 'https://placehold.co/800x400?text=News+Image',
//             time: new Date(article.publishedAt).toLocaleString(),
//             // category: article.category || 'General',
//             category: category ? category.charAt(0).toUpperCase() + category.slice(1) : 'General',
//             url: article.url,
//             source: article.source.name || 'Unknown Source',
//         }));
//     } catch (error) {
//         console.error('Error fetching news:', error);
//         return [];
//     }
// };

























const API_KEY = 'API_KEY';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchNews = async (params) => {
    try {
        let url;
        let category = '';
        if (params.query) {
            url = `${BASE_URL}/everything?q=${params.query}&sortBy=relevancy&pageSize=100&apiKey=${API_KEY}`;
        } else {
            category = params || 'general';
            url = `${BASE_URL}/top-headlines?country=us&category=${category}&pageSize=100&apiKey=${API_KEY}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        
        return data.articles.map(article => ({
            title: article.title,
            description: article.description || 'No description available',
            image: article.urlToImage || 'https://placehold.co/800x400/lightgray/gray?text=News+Image',
            time: new Date(article.publishedAt).toLocaleString(),
            // category: article.source.name || 'General',
            category: category.charAt(0).toUpperCase() + category.slice(1),
            url: article.url,
            source: article.source.name || 'Unknown Source'
        }));
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
};