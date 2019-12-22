import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'orbit-report';

    
=======
  title = 'Orbit Report';
  sourceList: Satellite[];

  constructor(){
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json'; 
    
    window.fetch(satellitesUrl).then(function(response){
      response.json().then(function(data){
        let fetchedSatellites = data.satellites;
        for (let i = 0; i < fetchedSatellites.length; i++){
          this.sourceList.push(new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational));
        }
      }.bind(this));
    }.bind(this));
 
 
  }
>>>>>>> 1f0a569ab43532d92b0062198d8e9b1a82c3f27f
}
