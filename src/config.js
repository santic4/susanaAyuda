import dotenv from "dotenv";
dotenv.config()

//export const PRODUCTS_JASON = './db/products.json';
export const PORT = 8080;
//export const MONGODB_CNX_STR = 'mongodb://127.0.0.1/ecommerce'
export const MONGODB_CNX_STR = 'mongodb+srv://santisv4:RomanD10s@cluster0.bhh58fu.mongodb.net/?retryWrites=true&w=majority'; 

export const SESSION_SECRET = process.env.SESSION_SECRET;
export const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;
export const COOKIE_SECRET = process.env.COOKIE_SECRET || 'jwtsecret';

export const githubAppId = process.env.githubAppId;
export const githubClienteId = process.env.githubClienteId;
export const githubClientSecret = process.env.githubClientSecret;
export const githubCallbackUrl = process.env.githubCallbackUrl;
