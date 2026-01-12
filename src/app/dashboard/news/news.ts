import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.html'
})
export class News {

  selectedDay: 'today' | 'yesterday' = 'today';

  todayNews = [
    'Angular 18 released',
    'Tech stocks rise',
    'AI tools trending',
    'Angular team announced improvements in performance and standalone components',
    'AI tools are increasingly being adopted in software testing and automation'
    

  ];

  yesterdayNews = [
    'Market was stable',
    'New Playwright version announced',
    'Startup funding increased'
  ];

  switchDay(day: 'today' | 'yesterday') {
    this.selectedDay = day;
  }
}

