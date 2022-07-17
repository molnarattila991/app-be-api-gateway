import { config } from "dotenv";

config();

export const ENV = {
    app: {
        name: process.env["NEST_APP_NAME"],
    },
    message: {
        connectionString: process.env["NEST_MQ_CONNECTION_STRING"]
    },
    auth: {
        ttl: 3600,
        jwtSecret: "secretKey"
    }
}