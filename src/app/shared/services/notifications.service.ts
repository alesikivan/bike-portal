import { Injectable } from '@angular/core';
import { AppNotification } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  notifications: AppNotification[] = []

  constructor() {}

  add(notification: AppNotification) {
    // Add currect time
    notification.date = `${notification.date.toLocaleTimeString([], {timeStyle: 'medium'})}`

    this.notifications.push(notification)

    setTimeout(() => {
      this.clearNotification()
    }, 3000)
  }

  clearNotification() {
    this.notifications.shift()
  }

  getAll() {
    return this.notifications
  }

  removeByDate(date: string) {
    // return this.notifications.filter(n => n.date != date)
  }
}
