import { Component } from '@angular/core';

import { AuthService   } from './auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  message='Home Page';
constructor(private  authService :AuthService ){

}


  ngOnInit(){
	   console.log(this.name);
    var loginFunc= this.authService.doGoogleLogin();
    loginFunc.then(function () {
     console.log("Promise Resolved");
}).catch(function () {
     console.log("Promise Rejected");
});
   }
}
