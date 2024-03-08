import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  userList:any;

  constructor(private userService:UserService){

  }
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
   this.userService.getAllUsers()
   .subscribe((res)=>{
    console.log("res get all users",res)
    this.userList=res;
   },err=>{
    console.log("err",err)
   })
  }


  DeleteUser(id:any){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        this.userService.deleteUser(id).subscribe((res)=>{
          this.getUsers()

          Swal.fire({
            title: "Deleted!",
            text: "User has been deleted.",
            icon: "success"
          });
        })
        
      
       
      }
    });
  }

}
