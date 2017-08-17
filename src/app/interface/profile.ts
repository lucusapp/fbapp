export interface Profile{
  nombre:string;
  actividad:string;
  telefono:string;
  email:string;
  key$?:string;
  picture:string;
  username:string;
  feed:{
    title:string;
    imagen:string;
    link: string;
    created_time: string;
    id:string;
    description:string

    };

  }
