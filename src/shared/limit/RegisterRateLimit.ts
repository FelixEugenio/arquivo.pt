import rateLimit from "express-rate-limit";

const RegisterRateLimit = rateLimit({
    windowMs:15 * 60 * 1000,
    max:3,
    message:'Muitas tentativas de cadastro. Tente novamente mais tarde.'
})

export {RegisterRateLimit}