import * as dotenv from 'dotenv';
import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path';
import setRoutes from './routes';
const http = require('http');



const app = express();
dotenv.config();
app.set('port', (process.env.PORT || 4000));
app.use('/', express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
console.log('Environment :' + process.env.NODE_ENV);
app.use(morgan('dev'));
// if (process.env.NODE_ENV !== 'test') {
//  app.use(morgan('dev'));
// }

async function main(): Promise<any> {
  try {

    registerAgent();
    setRoutes(app);
    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    if (!module.parent) {
      app.listen(app.get('port'), () => console.log(`Cherry Server listening on port ${app.get('port')}`));
    }
  } catch (err) {
    console.error(err);
  }
}

main();

function registerAgent(): void {

  const body = JSON.stringify({
    name: 'Node-Agent',
    description: 'this is node agent',
    url: 'http://localhost/4000',
    status: 'online'
  });

  let options = {
    hostname: 'localhost',
    port:'3000',
    path: '/api/agent',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(body)
    }
  };

  http.request(options, res => {
      let data = ''
      res.on('data', d => {
        data += d
      });
      res.on('end', () => {
        console.log(data);
      });
    })
    .on('error', console.error)
    .end(body);

}

export { app };
