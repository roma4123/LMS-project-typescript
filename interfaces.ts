export interface subject{
    title: string;
    lessons: number;
    description?: string
}

export interface person {
    name: {
        first: string,
        last: string
    }
    dateOfBirth: string,
    phones: [
        {
          phone: string,
          primary: boolean
        }
      ],
      sex: 'male' | 'female', // male OR female
      description?: string

}

export interface teacher extends person{
    emails: [
        {
          email: string,
          primary: boolean
        }
    ],
    subjects: [
        {
          subject: string // just name property of subject.
        }
      ]
}


export interface Id{
  id: string,
}

export interface pupils extends person,Id{

}

export interface Group {
  room: number;
  pupils: pupils[];
}
export interface Rooms{
  room: number,
}


export interface Records {
  pupilId: string,
  teacherId: string,
  subjectId: string,
  lesson: number,
  mark: number
};