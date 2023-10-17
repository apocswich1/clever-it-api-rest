import {z} from 'zod';
export default class Validator {

    private static getProperty(path:any[]){

        return path.reduce((prev, next)=>{
            let property = prev.toString();
            property = typeof next === 'number' ? property.concat(`[${next}]`) : property.concat(`.${next}`)
            return property;
        })
    }

    static async validate(schema:z.Schema, payload:any){
        await schema.safeParseAsync(payload).then(result=>{
            if(!result.success){
                const errors = result.error.errors.map(value=>{
                    return {property: this.getProperty(value.path), detail: value.message}
                })
                throw new Error(`${errors[0].property} - ${errors[0].detail}`)
            }
        })
    }
}