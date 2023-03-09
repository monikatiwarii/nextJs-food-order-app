const development = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

let baseURL = "http://localhost:8000"
if (!development)
  baseURL = "http://localhost:8000"


export default baseURL;