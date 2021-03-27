import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counts',
  templateUrl: './counts.component.html',
  styleUrls: ['./counts.component.css']
})
export class CountsComponent implements OnInit {

  totalUsers:number=0;
  totalLibrarians:number=0;
  totalBooks:number=0;

  constructor() { }

  ngOnInit(): void {
  }

}
