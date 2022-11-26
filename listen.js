import app from "./app.js";

const { PORT = 9090 } = process.env;

console.log(process.env.NODE_ENV);

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Listening on port ${PORT}...`);
});
