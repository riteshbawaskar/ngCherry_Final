import User from './models/user';

var tungus = require('tungus');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

async function setTingo(): Promise<any> {
  let tingodbURI;
  if (process.env.NODE_ENV === 'test') {
    tingodbURI = 'tingodb://' + __dirname + '/data/dev';
  } else {
    tingodbURI = 'tingodb://' + __dirname + '/data/prod';
  }
  mongoose.Promise = global.Promise;
  mongoose.set('useCreateIndex', true);
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useUnifiedTopology', true);

   // Connect to TingoDB using Mongoose
  await mongoose.connect(tingodbURI, function(err): void {
    // if we failed to connect, abort
    if (err) { console.log('error in connection ' + err ); throw err; }
  });
  console.log('Connected to TingoDB :' + tingodbURI);
  SeedUser();
}

function SeedUser(): void{

  const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    userid: {type: String, unique: true, trim: true },
    password: String,
    email: { type: String, unique: true, lowercase: true, trim: true },
  });

  var UserModel = mongoose.model('UserModel', userSchema);

  UserModel.create({
    firstname: 'GTAF',
    lastname: 'GTAF',
    userid: 'admin',
    password: 'password',
  }, function(err): void {
    if (err) { console.log(err.message); }
  });
  console.log('user seeded');
}

export default setTingo;
