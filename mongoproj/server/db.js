const mongoose = require('mongoose');

const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
//mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database-name?retryWrites=true&w=majority>';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Database connected')).catch((err) => console.log(err));