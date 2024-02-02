const BASE_URL = 'http://your-api-url.com/api';

// Utility to handle fetch requests
async function apiService<T = any>(uri: string, method: string = 'GET', body?: any, requiresAuth: boolean = false): Promise<T> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // If the request requires authorization, attach the JWT from localStorage
    if (requiresAuth) {
        const token = localStorage.getItem('token');
        if (token) {
            headers.append('Authorization', `Bearer ${token}`);
        } else {
            throw new Error("No authentication token found.");
        }
    }

    // Prepare the request options
    const options: RequestInit = {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,
    };

    // Make the fetch request
    const response = await fetch(`${BASE_URL}${uri}`, options);

    // Throw an error if the response status is not OK
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'An error occurred while making the request.');
    }

    // Parse and return the JSON response
    return response.json();
}

// Function to set the authentication token
function setAuthToken(token: string): void {
    localStorage.setItem('token', token);
}

// Function to clear the authentication token
function clearAuthToken(): void {
    localStorage.removeItem('token');
}

export default apiService;
export { setAuthToken, clearAuthToken };