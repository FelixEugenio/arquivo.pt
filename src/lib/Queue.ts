import Queue from 'bull'
import redisConfig from "../config/Redis/redis";

import RegistrationMail from "../jobs/RegistrationMail";
import redis from '../config/Redis/redis';

const mailQueue = new Queue(RegistrationMail.key,{
    redis:redis.redisConfig
});

export default mailQueue;
