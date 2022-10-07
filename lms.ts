import { subject } from "./interfaces";

export class Subject {
    // public title: string;
    // public description: string;
    // public lessons: number;
    static counter: number = 0;
    #subjectId = String(Subject.counter);

    constructor(subj: subject){
        // this.title = subj.title;
        // this.lessons = subj.lessons;
        // if(subj.description){
        //     this.description = subj.description;
        // }
        Object.assign(this,subj);
        Subject.counter++;
    }
    get id(): string{
        
        return this.#subjectId;
    }
}


  

  export class LMS{


     lms = new Map();
      
    add(subj: Subject){

        this.lms.set(subj.id,{id:subj.id, ...subj})

    }

    remove(subj: Subject){

        this.lms.delete(subj.id)
    }

    verify(subj: Subject): Boolean{

        return this.lms.has(subj.id)
    }

    readAll(){

        return [...this.lms.values()]
    }
  }



