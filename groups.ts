import { Pupils } from "./pupils";
import { person,Id,Group,Rooms} from "./interfaces";



export class Groups{

     groups:Map<string,Group> = new Map()
     static counter:number =0;

     public add(room:number){

        let id = String(Groups.counter++)
        this.groups.set(id,{room: room,pupils:[]})
        return id;
     }

     public addPupil(groupId:string, pupil:(person&Id)){

      if(!this.groups.has(groupId)){
         throw new Error('aseti Id ze jgufi ar arsebobs')
      }

        this.groups.get(groupId).pupils.push(pupil)

     }

     public remove(groupId: string,pupilid:string): void{

        let arr = this.groups.get(groupId).pupils;
        for(let i=0; i<arr.length;i++){
            if(arr[i].id===pupilid){
                arr.splice(i,1);
            }
        }
     }

     public update(groupId:string,{room: roomsnumber}:Rooms):void{

      this.groups.get(groupId).room=roomsnumber;
      
     }

     public read(groupId:string){
      let x = this.groups.get(groupId)
      return {id:groupId,...x}
     }

     public readAll(){
      let arr = [];
      
      // for(let i = 0; i<this.groups.size; i++){
      //    let x = this.groups.get(String(i));
      //    arr.push({id: String(i),...x})
      // }
      //     return arr;

      this.groups.forEach((value,key)=>{
         arr.push(this.read(key))
      })
      return arr;
     }

   }
