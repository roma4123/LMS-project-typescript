import { Groups } from "./groups";
import { Records, subject, Id } from "./interfaces";
// import { Group } from "./interfaces";
import { LMS } from "./js";
import { Teachers } from "./teachers";
import { pupils } from "./interfaces";

export class Gradebooks {
  static gradebooks = new Map();

  static counter = 0;
  public groups: Groups;
  public teachers: Teachers;
  public lms: LMS;
  constructor(groups: Groups, teachers: Teachers, lms: LMS) {
    this.groups = groups;
    this.teachers = teachers;
    this.lms = lms;
  }

  public add(groupId: string): void {
    let c = String(Gradebooks.counter++);

    let x = this.groups.read(groupId);
    delete x.id;
    Gradebooks.gradebooks.set(c, x);
  }

  public clear(): void {
    Gradebooks.gradebooks.clear();
  }

  public addRecord(gradebookId: string, record: Records) {

    if(Gradebooks.gradebooks.get(gradebookId)){

    const pupilId = record.pupilId;
    const pupilebi= Gradebooks.gradebooks.get(gradebookId).pupils.find((x:pupils)=>{
       return x.id === pupilId
    })


    const saxeli =`${pupilebi.name.first} ${pupilebi.name.last}`;        /// pupil fullname

    const teacherId = record.teacherId;
    const teacherRead = this.teachers.read(teacherId);
    const teacherName = `${teacherRead.name.first} ${teacherRead.name.last}`; //// teachers fullname

    const subjectId = record.subjectId;
    let x = this.lms.readAll();

    const subjectebi = x.find((el: subject & Id) => {

      return el.id === subjectId;
    });
    
    const subject = subjectebi.title;



    let shesafushi = {name:teacherName,subject: subject,lesson: record.lesson, mark: record.mark}

    if(!Gradebooks.gradebooks.get(gradebookId)[pupilId]){
      let danarcheni = {name: saxeli, record:[]}
      danarcheni.record.push(shesafushi);
      Gradebooks.gradebooks.get(gradebookId)[record.pupilId] = danarcheni;
      
    }else{
      Gradebooks.gradebooks.get(gradebookId)[pupilId].record.push(shesafushi)

  
    }


  }else{
    throw new Error ('araris eseti grradeid');
    
  }
  }

  public read(gradebookId: string, pupilId: string) {

 let x  = Gradebooks.gradebooks.get(gradebookId)[pupilId]
 return x

  }

  public readAll(gradebookId: string){

    let x = Gradebooks.gradebooks.get(gradebookId);
    return [x]
    

  }

  

}





