import { Sequelize } from "sequelize";

async function createDb(): Promise<Sequelize | Error> {
    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: './db/db.sqlite'
    });
    
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        return sequelize
      } catch (error) {
        console.error('Unable to connect to the database:', error);
        return Error()
      }
}

export default createDb;