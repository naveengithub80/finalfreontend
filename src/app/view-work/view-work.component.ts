import { Component, OnInit } from '@angular/core';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-view-work',
  templateUrl: './view-work.component.html',
  styleUrls: ['./view-work.component.css']
})
export class ViewWorkComponent implements OnInit {
  workDetails: any[] = [];

  constructor(private workService: WorkService) { }

  ngOnInit(): void {
    this.getWorkDetails();
  }

  getWorkDetails(): void {
    this.workService.getAllWork().subscribe(
      data => {
        this.workDetails = data;
      },
      error => {
        console.log('Error fetching work details', error);
      }
    );
  }
}
