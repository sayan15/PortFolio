import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../../_services/projects.service';
import { Project } from '../../_models/Project';
import {BsModalRef,BsModalService,ModalOptions} from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../../core/project-modal/project-modal.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  featuredproject:Project;
  bdModalRef?:BsModalRef;

  constructor(private titleService:Title, private projectService:ProjectsService,private modalService:BsModalService){

  }

  ngOnInit(){
    this.titleService.setTitle('Sayan - Home');
    this.featuredproject=this.projectService.getProjectById(0);
  }

  openProjectModal(){
    const modalOptions:ModalOptions={
      class:"modal-lg",
      initialState:{
        project:this.featuredproject
      }
    }
    this.bdModalRef=this.modalService.show(ProjectModalComponent,modalOptions);
  }
}
