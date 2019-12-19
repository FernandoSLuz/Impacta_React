const s = require('./config/server');
require('./config/db');
//require('./api/cursos')
require('./config/routes')(s);