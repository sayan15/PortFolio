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
  },
  {
    id:2,
    name:'ReviewAppAssignment',
    summary:'Review Mobile Application',
    description:'Developed a comprehensive review application for a Northampton-based travel agency. The application includes both Android and web versions, offering users the ability to register, provide reviews about the agency’s services, like and dislike reviews from other users, and engage in conversations by replying to reviews. Users also have the flexibility to update or delete their reviews. Administrative privileges are granted, enabling administrators to delete and update inappropriate reviews.',
    projectlink:'https://github.com/sayan15/ReviewAppAssignment',
    tags:[Tag.Kotlin],
    pictures:["assets/Default/1.png","assets/Default/2.png","assets/Default/3.png"]
  },
  {
    id:3,
    name:'Bill Generator',
    summary:'Report Incident using Mobile Application',
    description:'The system securely manages customer information, billing, and tariffs, with key features including secure admin login, customer registration, data updates, and confidential storage, ensuring robust data integrity and privacy.',
    projectlink:'https://github.com/sayan15/BillGenrator',
    tags:[Tag.JAVA],
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
