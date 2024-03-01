import Queue from 'bull'

import RegistrationMail from "../jobs/RegistrationMail";
import redis from '../config/Redis/redis';

const mailQueue = new Queue(RegistrationMail.key, {
	redis: redis.redisConfig
});

export default mailQueue;
