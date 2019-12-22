import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  constructor() { }

  ngOnInit() {
  }

  spaceDebrisCount(): number{
    let count = 0;
    for(let i = 0; i<this.satellites.length; i++){
    if(this.satellites[i].type.toLowerCase() === ('space debris')){
      count += 1;
    }
  }
    return count;
  }

  communicationCount(): number{
    let count = 0;
    for(let i = 0; i<this.satellites.length; i++){
    if(this.satellites[i].type.toLowerCase() === ('communication')){
      count += 1;
    }
  }
    return count;
  }

  probeCount(): number{
    let count = 0;
    for(let i = 0; i<this.satellites.length; i++){
    if(this.satellites[i].type.toLowerCase() === ('probe')){
      count += 1;
    }
  }
    return count;
  }

  positioningCount(): number{
    let count = 0;
    for(let i = 0; i<this.satellites.length; i++){
    if(this.satellites[i].type.toLowerCase() === ('positioning')){
      count += 1;
    }
  }
    return count;
  }

  
  spaceStationCount(): number{
    let count = 0;
    for(let i = 0; i<this.satellites.length; i++){
    if(this.satellites[i].type.toLowerCase() === ('space station')){
      count += 1;
    }
  }
    return count;
  }

  telescopeCount(): number{
    let count = 0;
    for(let i = 0; i<this.satellites.length; i++){
    if(this.satellites[i].type.toLowerCase() === ('telescope')){
      count += 1;
    }
  }
    return count;
  }

}
