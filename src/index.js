const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const bidRouter = require('./routes/bid-routes');

const PORT = process.env.PORT || 3000;

// Correct static file serving
app.use(express.static(path.join(__dirname, '../..', 'public')));

app.use(express.json());
app.use(morgan("combined"));

app.use('/rtb', bidRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});