
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SpacexService } from '../../services/spacex.service';
import { Launch } from '../../models/launch';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  mission!: Launch; 

  constructor(
    private route: ActivatedRoute,
    private spacexService: SpacexService,
    private router: Router 
  ) {}

  goBack() {
    this.router.navigate(['/']);
  }
  
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; 
    this.spacexService.getLaunchById(id).subscribe((data) => {
      this.mission = data; 
    });
  }
}
