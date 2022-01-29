import { Component, OnInit } from '@angular/core';
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-last-login',
  templateUrl: './last-login.component.html',
  styleUrls: ['./last-login.component.scss']
})
export class LastLoginComponent implements OnInit {
  faTrash=faTrash;
  faEdit=faEdit;
  constructor() { }

  ngOnInit(): void {
  }

}
