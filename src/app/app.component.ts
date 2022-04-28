import { Component, OnInit } from '@angular/core';
import { SheetService } from './sheet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sheetdbv9angular';
  constructor(public sheet: SheetService){

  }
  ngOnInit(): void {
    this.sheet.set()
    
  }
}
