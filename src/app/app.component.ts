import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
  title = 'angularTest';

  user = {name: 'andrea', loginDate: new Date(), result:[100, 1002, 1]}

  user2?: any;

  ngOnInit(): void {
    //window.sessionStorage.setItem("ciao", "mondo");
    //window.localStorage.setItem("pippo", "pluto");
    window.localStorage.setItem("pippo", JSON.stringify(this.user));
    window.localStorage.setItem("pluto", JSON.stringify(this.user));

    if (localStorage.getItem("pluto")) {
      this.user2 = JSON.parse(localStorage.getItem("pluto") as any);  
    }

    const key = "name";
    const value = "Simone";
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);

    const cookie = key + '=' + value + ';expires=' + date.toUTCString() + ';path=/;SameSite=lax';

    console.log(cookie);
    
    document.cookie = cookie;

    const cookie2 = 'pippo' + '=' + 'pluto' + ';expires=' + date.toUTCString() + ';path=/;SameSite=lax';
    
    console.log(document.cookie);
    
    document.cookie = cookie2;

  }

  onUserSaved() {
    const saved = window.localStorage.getItem('paperino');
    console.log(saved);
    
  }
  
  
}
