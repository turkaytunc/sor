const app = require('express')();
const cors = require('cors');
const helmet = require('helmet');

app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3001, () => {
  console.log('server started on port 3001');
});
