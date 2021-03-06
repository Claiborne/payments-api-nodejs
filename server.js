const app = require('./app');
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`App started on port ${port}...`);
  console.log(`Environment is ${app.settings.env}...`)
});
