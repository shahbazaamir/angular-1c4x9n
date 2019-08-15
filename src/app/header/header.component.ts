import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }
  action ="Login1";
  ngOnInit() {
  }
  login() {
    var loginFunc = this.authService.doGoogleLogin();
    loginFunc.then(function (res) {
      console.log("Login done");
      console.log(res);
      // this.action ="Log out";
    }).catch(function () {
      console.log("Login failed");
    });
  }
}