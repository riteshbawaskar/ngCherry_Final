"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
// import User from './models/user';
var tungus = require('tungus');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
function setTingo() {
    return __awaiter(this, void 0, void 0, function () {
        var mongodbURI;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Running mongoose version %s', mongoose.version);
                    if (process.env.NODE_ENV === 'test') {
                        mongodbURI = 'tingodb://' + __dirname + '/dev';
                    }
                    else {
                        mongodbURI = 'tingodb://' + __dirname + '/prod';
                    }
                    console.log(mongodbURI);
                    mongoose.Promise = global.Promise;
                    mongoose.set('useCreateIndex', true);
                    mongoose.set('useNewUrlParser', true);
                    mongoose.set('useFindAndModify', false);
                    mongoose.set('useUnifiedTopology', true);
                    console.log('MondoDBPath %s', mongodbURI);
                    // Connect to TingoDB using Mongoose
                    return [4 /*yield*/, mongoose.connect(mongodbURI, function (err) {
                            // if we failed to connect, abort
                            if (err) {
                                throw err;
                            }
                            //  SeedUser();
                        })];
                case 1:
                    // Connect to TingoDB using Mongoose
                    _a.sent();
                    console.log('Connected to Tingo DB');
                    return [2 /*return*/];
            }
        });
    });
}
//////////////////////////////////////////////////////////////////////////////
/* Data generation
*/
/*
function SeedUser()
{
 User.create({
   firstname: 'GTAF',
   lastname: 'GTAF',
   email: 'riteshbawaskar@gmail.com',
   password: 'password',
   userid: 'admin'
 });

}*/
/* var Schema = mongoose.Schema;

console.log('Running mongoose version %s', mongoose.version);

/**
 * Console schema
 */
/*
var consoleSchema = Schema({
    name: String
  , manufacturer: String
  , released: Date
})
var Console = mongoose.model('Console', consoleSchema);

/**
 * Game schema
 */
/*
var gameSchema = Schema({
    name: String
  , developer: String
  , released: Date
  , consoles: [{ type: Schema.Types.ObjectId, ref: 'Console' }]
})
var Game = mongoose.model('Game', gameSchema);

function createData () {
 Console.create({
   name: 'Nintendo 64'
 , manufacturer: 'Nintendo'
 , released: 'September 29, 1996'
 }, function (err, nintendo64) {
 if (err) { return done(err); }

 Game.create({
   name: 'Legend of Zelda: Ocarina of Time'
   , developer: 'Nintendo'
   , released: new Date('November 21, 1998')
   , consoles: [nintendo64]
 }, function (err) {
   if (err) { return done(err); }
   example();
 });
 });
}

/**
* Population
*/
/*
function example () {
 Game
 .findOne({ name: /^Legend of Zelda/ })
 .populate('consoles')
 .exec(function (err, ocinara) {
 if (err) { return done(err); }
 console.log(ocinara);

 console.log(
   '"%s" was released for the %s on %s'
   , ocinara.name
   , ocinara.consoles[0].name
   , ocinara.released.toLocaleDateString());


 });
}

function done (err) {
 if (err) { console.error(err); }
 Console.remove(function() {
 Game.remove(function() {
   mongoose.disconnect();
 });
 });
}
 */
////////////////////////////////////////////////////////////////////////////////
exports["default"] = setTingo;
