import rateLimit from "express-rate-limit";

const Authlimiter = rateLimit({
    windowMs:15 * 60 * 1000,
    max:5,
    message:'Muitas tentativas de login. Tente novamente mais tarde',
    skip: (req) => req.ip === '127.0.0.1' || req.ip === '::1',
})

export {Authlimiter}