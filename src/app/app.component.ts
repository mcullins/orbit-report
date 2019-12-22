import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Orbit Report';
  sourceList: Satellite[];
  displayList: Satellite[];

  constructor(){
    this.sourceList = [];
    this.displayList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json'; 
    
    window.fetch(satellitesUrl).then(function(response){
      response.json().then(function(data){
        let fetchedSatellites = data.satellites;
        for (let i = 0; i < fetchedSatellites.length; i++){
          this.sourceList.push(new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational));
        } this.displayList = this.sourceList.slice(0);
      }.bind(this));
    }.bind(this));
  }

  search(searchTerm: string):void{
    let matchingSatellites: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for (let i=0; i<this.sourceList.length; i++){
      let name = this.sourceList[i].name.toLowerCase();
      let type = this.sourceList[i].type.toLowerCase();
      let orbitType = this.sourceList[i].orbitType.toLowerCase();
      if (name.indexOf(searchTerm)>=0){
        matchingSatellites.push(this.sourceList[i]);
      } else if (type.indexOf(searchTerm)>=0){
        matchingSatellites.push(this.sourceList[i]);
      } else if (orbitType.indexOf(searchTerm)>=0){
        matchingSatellites.push(this.sourceList[i]);
      }
    }
    this.displayList = matchingSatellites;
  }

  searchName(searchTerm: string):void{
    let matchingSatellites: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for (let i=0; i<this.sourceList.length; i++){
      let name = this.sourceList[i].name.toLowerCase();
      if (name.indexOf(searchTerm)>=0){
        matchingSatellites.push(this.sourceList[i]);
      } 
    }
    this.displayList = matchingSatellites;
  }

  searchType(searchTerm: string):void{
    let matchingSatellites: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for (let i=0; i<this.sourceList.length; i++){
      let type = this.sourceList[i].type.toLowerCase();
      if (type.indexOf(searchTerm)>=0){
        matchingSatellites.push(this.sourceList[i]);
      } 
    }
    this.displayList = matchingSatellites;
  }

  searchOrbitType(searchTerm: string):void{
    let matchingSatellites: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for (let i=0; i<this.sourceList.length; i++){
      let orbitType = this.sourceList[i].orbitType.toLowerCase();
      if (orbitType.indexOf(searchTerm)>=0){
        matchingSatellites.push(this.sourceList[i]);
      } 
    }
    this.displayList = matchingSatellites;
  }
}
