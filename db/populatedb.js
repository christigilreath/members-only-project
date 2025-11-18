import { Client } from "pg";

const SQL = `CREATE TABLE IF NOT EXISTS users (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
first_name VARCHAR (255),
last_name VARCHAR (255),
email VARCHAR (255),
password VARCHAR (255),
member BOOLEAN,
admin BOOLEAN
);

CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
title VARCHAR (255),
date TIMESTAMP, 
message_text TEXT,
user_id INTEGER
);
`;

const main = async () => {
  console.log("seeding...");
  console.log(process.argv[2]);
  const client = new Client({ connectionString: process.argv[2] });
  console.log(client);
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
};

main();
