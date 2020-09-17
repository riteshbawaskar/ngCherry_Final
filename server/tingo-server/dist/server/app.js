"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const tslib_1 = require("tslib");
const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
// To connect to mongo enable the mongo section and disable the the setTingo section 
// import setMongo from './mongo';
const routes_1 = require("./routes");
const tingo_1 = require("./tingo");
const app = express();
exports.app = app;
dotenv.config();
app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
}
function main() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            // await setMongo();
            yield tingo_1.default();
            routes_1.default(app);
            app.get('/*', (req, res) => {
                res.sendFile(path.join(__dirname, '../public/index.html'));
            });
            if (!module.parent) {
                app.listen(app.get('port'), () => console.log(`Cherry Server listening on port ${app.get('port')}`));
            }
        }
        catch (err) {
            console.error(err);
        }
    });
}
main();
//# sourceMappingURL=app.js.map