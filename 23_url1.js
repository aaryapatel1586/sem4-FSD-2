var url = require("url");
var addr = "https://video.google.com:8080/ljuniversity/about?branch=CSE&year=2025#students";
var up = url.parse(addr);
console.log(up);

// for remove warning
process.noDeprecation = true;

// OUTPUT:
// Url {
//   protocol: 'https:',
//   slashes: true,
//   auth: null,
//   host: 'video.google.com:8080',
//   port: '8080',
//   hostname: 'video.google.com',
//   hash: '#students',
//   search: '?branch=CSE&year=2025',
//   query: 'branch=CSE&year=2025',
//   pathname: '/ljuniversity/about',
//   path: '/ljuniversity/about?branch=CSE&year=2025',
//   href: 'https://video.google.com:8080/ljuniversity/about?branch=CSE&year=2025#students'
// }