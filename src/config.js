import dotenv from "dotenv";
dotenv.config()

//export const PRODUCTS_JASON = './db/products.json';
export const PORT = process.env.PORT;
//export const MONGODB_CNX_STR = 'mongodb://127.0.0.1/ecommerce'
export const MONGODB_CNX_STR = process.env.MONGODB_CNX_STR; 

export const SESSION_SECRET = process.env.SESSION_SECRET;
export const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;
export const COOKIE_SECRET = process.env.COOKIE_SECRET;

export const githubAppId = process.env.githubAppId;
export const githubClienteId = process.env.githubClienteId;
export const githubClientSecret = process.env.githubClientSecret;
export const githubCallbackUrl = process.env.githubCallbackUrl;
