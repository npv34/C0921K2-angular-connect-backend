import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  formAddUpdate?: FormGroup;
  id?: number;
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: ActivatedRoute,
              private route: Router) { }

  ngOnInit(): void {
    this.formAddUpdate = this.fb.group({
      name: [''],
      email: [''],
    });
    // @ts-ignore
    this.id = +this.router.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe(res => {
      if (res.status == 'success') {
        this.formAddUpdate?.patchValue({
          name: res.data.name,
          email: res.data.email,
        })
      }
    })

  }

  submit() {
    let data = this.formAddUpdate?.value;
    this.userService.update(data, this.id).subscribe(res => {
      console.log(res)
      this.route.navigate(['admin/users'])
    })
  }

}
