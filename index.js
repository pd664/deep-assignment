// var http = require('http');

// const arr = [
//     {
//     "title": "Bitcoin Veterans Know to Keep Their Eyes on $19,511 Level",
//     "link": "https://time.com/6188099/bitcoin-strike-price-2022/"
//     },
//     {
//     "title": "Automakers Report Nearly 400 Crashes of Cars That Used Driver-Assist Tech",
//     "link": "https://time.com/6188127/crashes-driver-assist-tesla-nhtsa/"
//     },
//     {
//     "title": "Kyiv Won't Get New U.S. Weapons For Months",
//     "link": "https://time.com/6188028/biden-ukraine-weapons-aid/"
//     },
//     {
//     "title": "2 U.S. Veterans Reported Missing in Ukraine",
//     "link":"https://time.com/6188073/us-veterans-missing-in-ukraine/"
//     },
//     {
//     "title": "What a Bear Market Means for Consumers, Investors and the U.S. Economy",
//     "link": "https://time.com/6187703/bear-market-wall-street-recession/"
//     },
//     {
//     "title": "How to Honor Juneteenth, According to Black Activists",
//     "link": "https://time.com/6187898/juneteenth-national-holiday-activists/"
//     }
//     ]

// var options = {
//     hostname: '127.0.0.1',
//     port: process.env.PORT || 3000,
//     path: '/getTimeStories',
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//     }
// };

// const requestListener = (req, res) =>{
//     console.log("Request is Incoming");
       
//     if(req.url == '/getTimeStories') {
//         const jsonContent = JSON.stringify(arr);
//         res.write(jsonContent);
//         console.log(jsonContent)
//         res.end()
//         return
//     }
    
//     res.write(`please go to http://localhost:3000/getTimeStories to get the data`)
//     res.end();
//   };
   
//   const server = http.createServer(requestListener);
   
//   server.listen(options, function(){
//       console.log(`Server is Listening at http://localhost:${options.port}`);
//   });

const https = require('https');

const options = {
  hostname: 'example.com',
  port: 443,
  path: '/todos',
  method: 'GET',
};

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => {
  console.error(error);
});

req.end();
