import * as express from 'express';

import UserCtrl from './controllers/user';
import ComponentLibCtrl from './controllers/componentlib';
import ProjectCtrl from './controllers/project';
import SuiteCtrl from './controllers/suite';
import TestCaseCtrl from './controllers/testcase';
import ExecutionCtrl from 'controllers/execution';

function setRoutes(app): void {
  const router = express.Router();

  const userCtrl = new UserCtrl();
  const componentlibCtrl = new ComponentLibCtrl();
  const projectCtrl = new ProjectCtrl();
  const suiteCtrl = new SuiteCtrl();
  const testCtrl = new TestCaseCtrl();
  const executionCtrl = new ExecutionCtrl();

  // Cats
 // router.route('/cats').get(catCtrl.getAll);
 // router.route('/cats/count').get(catCtrl.count);
 // router.route('/cat').post(catCtrl.insert);
 // router.route('/cat/:id').get(catCtrl.get);
 // router.route('/cat/:id').put(catCtrl.update);
 // router.route('/cat/:id').delete(catCtrl.delete);

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);


   // ComponentLib
  router.route('/componentlibs').get(componentlibCtrl.getAll);
  router.route('/componentlibs/count').get(componentlibCtrl.count);
  router.route('/componentlib').post(componentlibCtrl.insert);
  router.route('/componentlib/:id').get(componentlibCtrl.get);
  router.route('/componentlib/:id').put(componentlibCtrl.update);
  router.route('/componentlib/:id').delete(componentlibCtrl.delete);


   // Project
  router.route('/projects').get(projectCtrl.getAll);
  router.route('/project/count').get(projectCtrl.count);
  router.route('/project').post(projectCtrl.insert);
  router.route('/project/:id').get(projectCtrl.get);
  router.route('/project/:id').put(projectCtrl.update);
  router.route('/project/:id').delete(projectCtrl.delete);

   // Suites
  router.route('/suites').get(suiteCtrl.getAll);
  router.route('/suite/count').get(suiteCtrl.count);
  router.route('/suite').post(suiteCtrl.insert);
  router.route('/suite/:id').get(suiteCtrl.get);
  router.route('/suite/:id').put(suiteCtrl.update);
  router.route('/suite/:id').delete(suiteCtrl.delete);

    // TestCases
  router.route('/tests/').get(testCtrl.getAll);
  router.route('/tests/:id').get(testCtrl.getTestCases);
  router.route('/test/count').get(testCtrl.count);
  router.route('/test').post(testCtrl.insert);
  router.route('/test/:id').get(testCtrl.get);
  router.route('/test/:id').put(testCtrl.update);
  router.route('/test/:id').delete(testCtrl.delete);

  // Executions
  router.route('/executions').get(executionCtrl.getAll);
  router.route('/execution/count').get(executionCtrl.count);
  router.route('/execution').post(executionCtrl.insert);
  router.route('/execution/:id').get(executionCtrl.get);
  router.route('/execution/:id').put(executionCtrl.update);
  router.route('/execution/:id').delete(executionCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}

export default setRoutes;
