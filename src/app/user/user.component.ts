import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  user: any
  

  constructor(private Service:UserserviceService,private router:Router) { 
   
  }
  ngOnInit(): void {
    this.getUserInfo();
 
   }
   getUserInfo(){
    return this.Service.getUserInfo().subscribe((u:any)=>
    {
console.log(u);
this.user=u;
    })
    
    
  }
  updateUser(id:any){
    // console.log(this.users)
   this.router.navigateByUrl(`/useredit/${id}`);
  }

  deleteUser(id: any) {
    
    return this.Service.deleteUser(id).subscribe((e:any) => {
      console.log(e);
      this.ngOnInit();

     });
   }
}

  


