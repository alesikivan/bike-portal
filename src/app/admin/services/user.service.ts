import { Injectable } from '@angular/core';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { UserModel } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userList: UserModel[] = [{
    id: 1,
    name: 'Ankit Sahu',
    dob: new Date('08/31/1992'),
    email: 'ankit@gmail.com',
    gender: 'Male',
    mobile: '8978786933',
    isActive: true,
    range: [0, 10],
    userType: 'Admin'
  }];

  constructor(
    private notificationsService: NotificationsService
  ) {}

  getUsers() {
    return this.userList
  }
  getUsersByID(id: number) {
    return this.userList.find(x => x.id == id)
  }
  addUser(user: UserModel) {
    user.id = new Date().getTime()
    this.userList.push(user)

    this.notificationsService.add({
      message: 'Пользователь успелно создан!',
      date: new Date(),
      status: 'success'
    })
  }
  updateUser(user: UserModel) {
    const userIndex = this.userList.findIndex(x => x.id == user.id);
    if (userIndex != null && userIndex != undefined) {
        this.userList[userIndex] = user
    }
  }
  removeUser(id: number) {
    this.userList = this.userList.filter(x => x.id != id)
  }
}
