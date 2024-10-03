## Inventory Management System with NextJS-AWS
### Client
- Dependencies `NextJS`,`Tailwind`, `Redux Toolkit`, `Redux Toolkit Query`,`Material UI Data Grid`

### Server
- Install rimraf to build the typescript project `npm install rimraf` then run the build script `rimraf dist && npx tsc`
- Run the development server with auto updates with `npm run build && concurrently \"npx tsc -w\" \"nodemon --exec ts-node src/index.ts\"`
- Test out the API CALLS with a curl command`curl http://localhost:8000/ROUTE_NAME`
#### Database
- Installation of DB dependencies `npm i prisma @prisma/client`
- Initializing prisma `npx prisma init`
- Prisma schema was created at `prisma/schema.prisma`
- Set the DATABASE_URL in the `.env file`to point to your existing database 
- If your database has no tables yet, read `https://pris.ly/d/getting-started`
- Set the provider of the datasource block in schema: prisma to match your database: `postgresql`, `mysql`, `sqlite`, `sqlserver`, `mongodb` or `cockroachdb`.
- Run `prisma db pull` to turn your database schema into a Prisma schema.
- Run `npx prisma generate` to generate the Prisma Client: 
- Sync your database with  the schema `npx prisma migrate dev --name init`
- Seed your database using `npm run seed` and start querying your database.
- Tip: Explore how you can extend the `ORM` with scalable connection pooling`, `global caching`, and `real-time database events` Read: `https://pris.ly/cli/beyond-orm`