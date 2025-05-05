const API_KEY = 'API_KEY';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchNews = async (category = 'general') => {
    try {
        const response = await fetch(
            `${BASE_URL}/top-headlines?country=us&category=${category}&pageSize=100&apiKey=${API_KEY}`
            // `${BASE_URL}/everything?q=rajkot&apiKey=${API_KEY}`
        );
        const data = await response.json();
        
        return data.articles.map(article => ({
            title: article.title,
            description: article.description || 'No description available',
            image: article.urlToImage || 'https://via.placeholder.com/800x400?text=No+Image',
            time: new Date(article.publishedAt).toLocaleString(),
            category: category.charAt(0).toUpperCase() + category.slice(1),
            url: article.url
        }));
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
};