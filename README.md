# Server Base - Proyecto ONG

## Envinroment setup

1. Create database
2. Copy .env.example to .env and fill with database credentials.

To install dependencies, run

```bash
npm install
```

3. Migrations:

```bash
npx sequelize-cli db:migrate
```

4. Seeders:

```bash
npx sequelize-cli db:seed:all
```

## Start local server

```bash
npm start
```

### Seed to Users

| firstname | lastname | email           | password | roleID   | image                           |
| --------- | -------- | --------------- | -------- | -------- | ------------------------------- |
| Usario1   | Demo1    | test1@test.com  | 1234     | 1        | https://via.placeholder.com/150 |
| Usario2   | Demo2    | test2@test.com  | 1234     | 1        | https://via.placeholder.com/150 |
| Usario3   | Demo3    | test3@test.com  | 1234     | 1        | https://via.placeholder.com/150 |
| Usario4   | Demo4    | test4@test.com  | 1234     | 1        | https://via.placeholder.com/150 |
| Usario5   | Demo5    | test5@test.com  | 1234     | 1        | https://via.placeholder.com/150 |
| Usario6   | Demo6    | test6@test.com  | 1234     | 2        | https://via.placeholder.com/150 |
| Usario6   | Demo6    | test6@test.com  | 1234     | 2        | https://via.placeholder.com/150 |
| Usario7   | Demo7    | test7@test.com  | 1234     | 2        | https://via.placeholder.com/150 |
| Usario8   | Demo8    | test8@test.com  | 1234     | 2        | https://via.placeholder.com/150 |
| Usario9   | Demo9    | test9@test.com  | 1234     | 2        | https://via.placeholder.com/150 |
| Usario10  | Demo10   | test10@test.com | 1234     | 2        | https://via.placeholder.com/150 |
