import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects:Project[]=[{
    id:0,
    name:'Sample Angular App',
    summary:'CRUD Application',
    description:'Create Read Update and Delete using angular forms, used firebase as backend for authorization',
    projectlink:'https://github.com/sayan15/AngularFirstProject.git',
    tags:[Tag.ANGULAR,Tag.TYPESCRIPT,Tag.Bootstrap],
    pictures:["assets/Default/1.png","assets/Default/2.png","assets/Default/3.png"]
  },
  {
    id:1,
    name:'ReportMate Mobile App',
    summary:'Report Incident using Mobile Application',
    description:'DevelopedawebapplicationusingtheLaravelframeworkforincidentreportingbypublicviatheirmobile devices. The application allows users to report incidents and view incident details on GoogleMaps,as well as find routes to the incident locations. Firebase and MySQL were used as databases, with PHP serving as the back end. Google Maps API integration was employed for plotting incident locations, displaying details, and providing navigation',
    projectlink:'https://github.com/sayan15/ReportMateMobile.git',
    tags:[Tag.Kotlin],
    pictures:["assets/Default/1.png","assets/Default/2.png","assets/Default/3.png"]
  }
];

  constructor() { }

  getProject(){
    return this.projects;
  }

  getProjectById(id:number):Project{
    let project=this.projects.find(project=>project.id===id );

    if(project===undefined){
      throw new TypeError('There is no project that matches the Id');
    }

    return project;
  }

  getProjectsByFilter(filterTags:Tag[]){
    let filterProjects:Project[]=[];

    this.projects.forEach(function(prject){
      let foundAll=true;

      filterTags.forEach(function(tag){
        if(prject.tags.includes(tag)==false)
          {
            foundAll=false;
          }
      });

      if(foundAll){
        filterProjects.push(prject);
      }
    })

    return filterProjects;
  }
}
