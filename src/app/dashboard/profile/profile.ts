import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.html'
})
export class Profile {
  name = 'Melvin';
  role = 'QA Engineer';
}
