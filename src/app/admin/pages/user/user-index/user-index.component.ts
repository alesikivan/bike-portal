import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/admin/models/user';
import { UserService } from 'src/app/admin/services/user.service';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.scss']
})
export class UserIndexComponent implements OnInit {

  userList: UserModel[] = []
  first = 0
  rows = 10

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Get Users from UserService
    this.userList = this.userService.getUsers();
  }

  next() {
    this.first = this.first + this.rows
  }
  prev() {
    this.first = this.first - this.rows
  }
  reset() {
    this.first = 0
  }

  isLastPage(): boolean {
    return this.userList ? this.first === (this.userList.length - this.rows) : true
  }

  isFirstPage(): boolean {
    return this.userList ? this.first === 0 : true
  }

  remove(id: number) {
    if (window.confirm('Вы уверены что хотите удалить?')) {
      this.userService.removeUser(id)
      this.userList = this.userService.getUsers()
    }
  }

}
