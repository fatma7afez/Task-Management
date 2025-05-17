import {
  Component,
  computed,
  Input,
  signal,
  input,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

let randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  select = output<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  id = input.required<string>();

  imagePath = computed(() => {
    return `assets/users/${this.avatar()}`;
  });

  onSelectedUser() {
    this.select.emit(this.id());
  }
}
