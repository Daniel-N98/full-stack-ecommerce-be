import app from "./app.js";

const { PORT = 9090 } = process.env;

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Listening on port ${PORT}...`);
});
