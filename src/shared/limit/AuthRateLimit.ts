import rateLimit from "express-rate-limit";

const Authlimiter = rateLimit({
    windowMs:15 * 60 * 1000,
    max:5,
    message:'Muitas tentativas de login. Tente novamente mais tarde'
})

export {Authlimiter}