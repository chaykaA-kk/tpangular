import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service'; // Ensure you have this import
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule], // Add HttpClientModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'serviceangularr';
  data: any[] = []; // Initialize as an empty array

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(
      (response) => {
        this.data = response; // Store the data
        console.log('Fetched data:', this.data); // Log the data to the console
      },
      (error) => {
        console.error('Error fetching data:', error); // Handle errors
      }
    );
  }
}
