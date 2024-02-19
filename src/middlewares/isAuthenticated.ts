import { Request,Response,NextFunction} from "express";
import { verify } from 'jsonwebtoken'

interface Payload{
    sub:string
}

export function isAuthenticated (
    req:Request,
    res:Response,
    next:NextFunction
){

    const authToken = req.headers.authorization;

    if(!authToken){
        return res.status(400).end;
    }

    const [, token] = authToken.split(" ");

    try{
        const {sub} = verify(
           token,
           process.env.SECRET_JWT
        )as Payload

        req.user_id = sub;

    }catch(err){
      return res.status(401).end();
    }
    return next();
}