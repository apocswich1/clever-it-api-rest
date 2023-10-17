import {z} from 'zod';
import Validator from './Validator';

export default class CustomTaskValidator{
    static async validate(payload:any){
        const schema = z.object({
            name: z.string(),
            status: z.string(),
            description: z.string(),
            expirationDate: z.string(),
        })

        await Validator.validate(schema,payload);
    }
}