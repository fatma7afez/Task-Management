import {
  Component,
  computed,
  Input,
  signal,
  input,
  Output,
  EventEmitter,
  output
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
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  // @Output() select = new EventEmitter<string>();
  select =  output<string>()
  // get imagePath() {
  //   return `assets/users/${this.avatar}`;
  // }
  avatar = input.required<string>();
  name = input.required<string>();
  id = input.required<string>();

  imagePath = computed(() => {
    return `assets/users/${this.avatar()}`;
  });

  onSelectedUser(anything:any) {
    console.log(' output() ',anything)
    this.select.emit(this.id());
  }
}
