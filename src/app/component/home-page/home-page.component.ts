import { Component,OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    // this.loginForm = this.fb.group({
    //   Email: ['', Validators.required],
    //   Password: ['', Validators.required],
    // });
  }
}


