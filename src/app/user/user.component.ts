import { Component, computed, input, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  select = output<string>();
  user = input.required<User>();
  activeUser = input.required<boolean>();

  imagePath = computed(() => {
    return `assets/users/${this.user()?.avatar}`;
  });

  onSelectedUser() {
    this.select.emit(this.user()?.id);
  }
}
