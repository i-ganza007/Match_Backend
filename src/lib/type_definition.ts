declare global {
  namespace Express {
    interface User {

          userId:string
          name :string

          sex : string

          email:string
          
          phone_number:string

          password:string
 
          lastActive:Date


          district:string

          sector:string
 
          village:string

          cell:string

          latitude:string
          
          longitude:string
    }

    interface Request {
      user?: User;
    }
  }
}

export {};