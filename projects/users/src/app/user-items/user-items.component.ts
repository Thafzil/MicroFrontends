import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-items',
  templateUrl: './user-items.component.html',
  styleUrl: './user-items.component.css',
})
export class UserItemsComponent {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
