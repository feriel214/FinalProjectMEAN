import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private endpopint="http://localhost:3000/apiUsers/"
  constructor(private http:HttpClient) { }

    //get all users 
    getAllUsers(){
      return this.http.get(this.endpopint+'allusers');
    }

      //post
   addUser( user:any){
    return this.http.post(this.endpopint+'register',user)
   }

   //put
    editUser(id:any,newUser:any){
      return this.http.put(this.endpopint+`user/edit/${id}`,newUser)
    }

   //delete 
   deleteUser(id:any){
    return this.http.delete(this.endpopint+`user/delete/${id}`)
   }

}
