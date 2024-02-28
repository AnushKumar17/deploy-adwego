{
  "version": 2,
  "routes": [
    {
      "handle": "serve",
      "src": "/api/(.*)",
      "method": ["GET", "POST", "PUT", "DELETE"],
      "headers": {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      },
      "dest": "/api/$1"
    },
    {
      "handle": "filesystem"
    },
    {
      "src": "/(.*)",
      "dest": "/"
    }
  ]
}
