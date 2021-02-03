const { CONTENT_API_KEY } = process.env;

const restdb = {
  headers: {
    "cache-control": "no-cache",
    "x-apikey": CONTENT_API_KEY
  }
};

export default restdb;
