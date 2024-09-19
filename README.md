## Inventory Management System with NextJS
### Client
- Dependencies `NextJS`,`Tailwind`, `Redux Toolkit`, `Redux Toolkit Query`,`Material UI Data Grid`

### Server
#### Database
- Installation of DB dependencies `npm i prisma @prisma/client`
- Initializing prisma `npx prisma init`
- Prisma schema was created at `prisma/schema.prisma`
- Set the DATABASE_URL in the `.env file `to point to your existing database. - If your database has no tables yet, read `https://pris.ly/d/getting-started`
- Set the provider of the datasource block in schema.prisma to match your database: `postgresql`, `mysql`, `sqlite`, `sqlserver`, `mongodb` or `cockroachdb`.
- Run `prisma db pull` to turn your database schema into a Prisma schema.
- Run `prisma generate` to generate the Prisma Client. You can then start querying your database.
- Tip: Explore how you can extend the `ORM` with scalable connection pooling, global caching, and real-time database events. Read: `https://pris.ly/cli/beyond-orm`
