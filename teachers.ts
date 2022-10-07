import { teacher,Id } from "./interfaces";

export class Teachers{

    teachers: Map<string,teacher> = new Map();

    static counter:number =0;

    public add(data:teacher){

        let id = String(Teachers.counter++)
        this.teachers.set(id,data);
        return id;
    }

    public read(id: string):(Id & teacher){

        return {id:id,...this.teachers.get(id)}
        
    }

    public update(id: string, profile: teacher):void{

            this.teachers.set(id,profile)
        

    }

    public remove(id: string):void{

        this.teachers.delete(id);
        
    }
}
