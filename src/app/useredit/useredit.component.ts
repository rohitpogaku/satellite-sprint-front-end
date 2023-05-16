import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user/user';
import { UserserviceService } from '../userservice.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {

  user?: User
  data: any


  constructor(private service: UserserviceService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id)
    this.service.getUserById(id).subscribe(data => {
      this.user = data
      console.log(this.user)

      this.form.patchValue({
        firstname: this.user.firstname,
        lastname: this.user.lastname,
        email: this.user.email,
        gender:this.user.gender,
        role:this.user.role
      });
    })
  }
  form = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required])
   
  })
  submit(){
    this.data = this.form.value
    console.log(this.data)
    this.data.id=this.user?.id
    this.service.updateUser(this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['user']);
   }
}
