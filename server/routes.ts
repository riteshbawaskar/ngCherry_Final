import * as express from 'express';

import UserCtrl from './controllers/user';
import ComponentLibCtrl from './controllers/componentlib';
import ProjectCtrl from './controllers/project';

function setRoutes(app): void {
  const router = express.Router();
 
  const userCtrl = new UserCtrl();
  const componentlibCtrl = new ComponentLibCtrl();
  const projectCtrl = new ProjectCtrl();

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

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}

export default setRoutes;
