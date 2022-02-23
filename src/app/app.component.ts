import {Component, OnInit} from '@angular/core';
import {AzureAuthService} from 'ngx-bstal13';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app2';
  loginStatus = false
  constructor(private auth: AzureAuthService) {
  }
  onLogin(): void{
    this.auth.logIn();
  }
  onLogout():void{
    this.auth.logOut()
  }
  ngOnInit() {
    this.auth.getAuthStatus().subscribe(status=> {this.loginStatus = status})
  }
}
