import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  events: any[];

  constructor() {
      this.events = [
          { status: 'Born', date: '22/07/2003 06:25PM', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
          { status: 'Schooling', date: '24/03/2020 14:00PM', icon: 'pi pi-cog', color: '#673AB7' },
          { status: 'College Life', date: '23/01/2023 1:45PM', icon: 'pi pi-shopping-cart', color: '#FF9800' },
          { status: 'CG-VAK Trainee', date: '23/01/2023 3:00PM', icon: 'pi pi-check', color: '#607D8B' }
      ];
  }
}
