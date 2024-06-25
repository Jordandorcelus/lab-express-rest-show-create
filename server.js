const app = require('./app');

//Load the environment variables from .env file.
require('dotenv').config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});