import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  launchYear: string = '';
  launchSuccess!: boolean;
  landingSuccess!: boolean;


  @Output() filterByYear = new EventEmitter<string>();
  @Output() resetFilters = new EventEmitter<void>();
  @Output() filterByLaunch = new EventEmitter<boolean>();
  @Output() filterByLanding = new EventEmitter<boolean>();
  @Output() resetAll = new EventEmitter<void>();

  applyFilter() {
    this.filterByYear.emit(this.launchYear);
  }

  reset() {
    this.launchYear = '';
    this.launchSuccess = undefined!;
    this.landingSuccess = undefined!;
    this.resetAll.emit();
  }

  selectLaunch(value: boolean) {
    this.filterByLaunch.emit(value);
  }

  selectLanding(value: boolean) {
    this.filterByLanding.emit(value);
  }
}
