import { MissionfilterComponent } from '../missionfilter/missionfilter.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SpacexService } from '../../services/spacex.service';
import { Launch } from '../../models/launch';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule, RouterModule, MissionfilterComponent],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: Launch[] = [];

  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.spacexService.getAllLaunches().subscribe((data) => {
      this.missions = data;
    });
  }

  applyYearFilter(year: string) {
    this.spacexService.getLaunchesByYear(year).subscribe((data) => {
      this.missions = data;
    });
  }

  resetFilters() {
    this.spacexService.getAllLaunches().subscribe((data) => {
      this.missions = data;
    });
  }

  filterByLaunch(success: boolean) {
    this.spacexService.getAllLaunches().subscribe((data) => {
      this.missions = data.filter(m => m.launch_success === success);
    });
  }

  filterByLanding(success: boolean) {
    this.spacexService.getAllLaunches().subscribe((data) => {
      this.missions = data.filter(m =>
        m.rocket &&
        m.rocket.first_stage &&
        m.rocket.first_stage.cores &&
        m.rocket.first_stage.cores[0] &&
        m.rocket.first_stage.cores[0].land_success === success
      );
    });
  }
}
