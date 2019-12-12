const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise; //para evitar warnings
module.exports = mongoose.connect('mongodb://localhost:27017/projeto',
    {useNewUrlParser:true, useUnifiedTopology:true}
); 