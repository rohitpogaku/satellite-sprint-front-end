import {Component, OnInit} from '@angular/core';
import {SatelliteService} from '../satellite.service';
import {EmailValidator, FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MessageService} from "primeng/api";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  allcountries: any;
  user: any;
  registerform: any;

  constructor(private service: SatelliteService, private router: Router, private messageService: MessageService) {
  }


  form = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    gender: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    return this.service.getCountries().subscribe((c: any) => {
      console.log(c);
      this.allcountries = c;
    })
  }

  submitForm(registerform: any) {


    this.user = registerform
    console.log(this.user)


    this.service.addUserInfo(this.user).subscribe(
      (user: any) => {
        const message = "Registration Successful";
        this.messageService.add({severity: 'success', summary: message});
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1000);
      },
      (error: any) => {
        const message = "Email already exists!";
        this.messageService.add({severity: 'error', summary: message});
      });

  }
}
