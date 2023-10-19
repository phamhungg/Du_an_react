"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    port: process.env.PORT || 4000,
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: 3500,
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || 'hung',
        database: process.env.DB_NAME || 'banhang_react',
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'thong tin khoa bi mat',
        expiresIn: process.env.JWT_EXPIRES_IN || '24h',
    }
};
