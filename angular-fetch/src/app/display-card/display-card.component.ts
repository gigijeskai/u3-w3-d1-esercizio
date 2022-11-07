import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss'],
})
export class DisplayCardComponent implements OnInit {
  userList: any[] = [];
  likeList: number = 0;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((resp) => (this.userList = resp));
  }
  addLike(user: any) {
    this.userService.addLike(user).subscribe((resp: any) => console.log(resp));
    this.likeList++;
  }
  remove(id: number) {
    this.userList = this.userList.filter((ele) => ele.id !== id);
  }
}
