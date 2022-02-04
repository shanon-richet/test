import pg from "pg";

const { Pool } = pg
const config = ({
    user: 'mpecncienhfzlu', // Your newly created user
    host: 'ec2-52-214-125-106.eu-west-1.compute.amazonaws.com',
    database: 'ddg1f29pvp3ot6', // Your newly created database
    password: 'b40014de6b4e4e8ceecd8fb640e128ec0ad632a3886ae532dbd6dc130ae5504e', // Your newly created password
    port: 5432,
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
const pool = new Pool(config)
pool.connect()

export default pool