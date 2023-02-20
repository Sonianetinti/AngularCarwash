import { Component,OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-carpackage',
  templateUrl: './carpackage.component.html',
  styleUrls: ['./carpackage.component.css']
})
export class CarpackageComponent implements OnInit{
  public fullName:string="";
  constructor(private auth:AuthService,private userStore:UserStoreService){}
   
   ngOnInit(){
    this.userStore.getFullNameFromStore()
    .subscribe(val=>{
      let fullNameFromToken = this.auth.getRoleFromToken();
      this.fullName = val || fullNameFromToken
    })

   }
   logout(){
    this.auth.LogOut();
   }

}
