import * as express from 'express';

import ExecutionCtrl from './controllers/execution';

const executionCtrl = new ExecutionCtrl();

function setRoutes(app): void {
  const router = express.Router();

  router.route('/execute').post(executionCtrl.execute);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}

export default setRoutes;
