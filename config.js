// API Configuration
// API keys are now handled server-side for security.
// Client-side code uses proxy endpoints.

const API_ENDPOINTS = {
    GEMINI: "/api/gemini",
    WEATHER: "/api/weather"
};

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = API_ENDPOINTS;
}