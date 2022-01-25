import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  formAddUser?: FormGroup;
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.formAddUser = this.fb.group({
      name: [''],
      email: [''],
      password: ['']
    })
  }

  submit() {
    let data = this.formAddUser?.value;
    this.userService.createUser(data).subscribe(res => {
      if (res.status == 'success') {
        this.router.navigate(['admin/users'])
      }
    })
  }

}
