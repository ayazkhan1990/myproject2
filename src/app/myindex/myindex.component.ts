import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myindex',
  templateUrl: './myindex.component.html',
  styleUrls: ['./myindex.component.css']
})
export class MyindexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  users = [];
  onCreatUser(uname, email, phone, pass) {
    this.users.push({
      name: uname.value,
      email: email.value,
      phone: phone.value,
      pass: pass.value
    });
  }

  onRemoveItem(item) {
    this.users.splice(item, 1)

  }
  // Select Option
  selectproduct:string;

  getProductVale(val) {
    this.selectproduct=val.target.value;

  }

}
