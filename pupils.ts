import { person,Id } from "./interfaces";
import { Teachers } from "./teachers";


export class Pupils{

    pupils:Map<string,person> = new Map();

    static counter:number =0;

    public add(data:person ):Id & person{
           
       let pupilsId= String(Pupils.counter++)
        this.pupils.set(pupilsId,data);  
        return {id:pupilsId,...data};

    }

    public read(id: string): (Id & person) {

         return {id: id,...this.pupils.get(id)}
    }

    public update(id:string,profile:person):void{

        this.pupils.set(id,profile)
    }

    public remove(id: string): void{

        this.pupils.delete(id)
    }



}