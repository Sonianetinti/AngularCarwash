import { Component,OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-carpackage',
  templateUrl: './carpackage.component.html',
  styleUrls: ['./carpackage.component.css']
})
export class CarpackageComponent implements OnInit{
  constructor(private auth:AuthService){}
   
   ngOnInit():void{

   }
   logout(){
    this.auth.LogOut();
   }

}
