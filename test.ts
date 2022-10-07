import { Id, person, teacher } from "./interfaces";
import { LMS } from "./js";
import { Subject } from "./js";
import { Teachers } from "./teachers";
import { Pupils } from "./pupils";
import { Groups } from "./groups";
import { Gradebooks } from "./gradebook";




const history = new Subject({
    title: 'History',
    lessons: 24
  });

  const math = new Subject({
    title: 'math',
    lessons: 24
  });

  const geo = new Subject({
    title: 'History',
    lessons: 24
  });
  
  // console.log(history.id);
  // console.log(math.id);
//   console.log(geo.id);
const lms = new LMS();

lms.add(history)
lms.add(math)
lms.add(geo)


// console.log(lms)


const data:teacher = {
  name: {
    first: "jumberi",
    last: "jumberadzze"
},
dateOfBirth: "ticheri-1",
phones: [
    {
      phone: "string",
      primary: true
    }
  ],
  sex: "male",
  emails: [
    {
      email: "string",
      primary: true
    }
],
subjects: [
    {
      subject: "string" // just name property of subject.
    }
  ]
}

const dat:teacher = {
  name: {
    first: "ticheri-2",
    last: "string"
},
dateOfBirth: "gio",
phones: [
    {
      phone: "string",
      primary: true
    }
  ],
  sex: "male",
  emails: [
    {
      email: "string",
      primary: true
    }
],
subjects: [
    {
      subject: "string" // just name property of subject.
    }
  ]
}

const teachers = new Teachers();
const teachId =teachers.add(data);
teachers.add(dat);





const pupilsdata:person = {
    name: {
      first: "tengizi",
      last: "tengizadze"
  },
  dateOfBirth: "pupil-1",
  phones: [
      {
        phone: "string",
        primary: true
      }
    ],
    sex: "male",
  }
  const pupilsdata2:person = {

    name: {
      first: "meore",
      last: "string"
  },
  dateOfBirth: "meore",
  phones: [
      {
        phone: "string",
        primary: true
      }
    ],
    sex: "male",


  }

  const pupils = new Pupils();

const pupil = pupils.add(pupilsdata)
 const pupil2 = pupils.add(pupilsdata2)


  const room = 236;
const groups = new Groups();
const groupId = groups.add(room);
const groupId2 =groups.add(400);
const groupId3 =groups.add(700)



groups.addPupil('0',pupil)

groups.addPupil('1',pupil2);

// console.log(groups.readAll())

// console.log(groups.read('0'))
const pupilId = pupil.id;
const teacherId = teachId;
const gradebooks = new Gradebooks(groups, teachers, lms);
const gradebook = gradebooks.add(groupId);
const gradebook2 = gradebooks.add(groupId2);
const gradebook3 = gradebooks.add(groupId3);



const record = {
  pupilId: pupil.id,
  teacherId: teacherId,
  subjectId: history.id,
  lesson: 1,
  mark: 9
};
const record2 = {
  pupilId: pupil.id,
  teacherId: teacherId,
  subjectId: history.id,
  lesson: 10,
  mark: 90
};
const gradebookId = '0';
const y= gradebooks.addRecord('0', record2);
const w= gradebooks.addRecord('0', record);

// const oliver = gradebooks.read(gradebookId, pupilId);
// console.log(Gradebooks.gradebooks.get('0')['0'])
// console.log(Gradebooks.gradebooks)

const oliver = gradebooks.read(gradebookId, pupilId);
const students = gradebooks.readAll(gradebookId);
console.log(students)







