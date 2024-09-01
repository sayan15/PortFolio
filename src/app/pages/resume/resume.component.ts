import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  isworkExperienceOpen:Boolean=false;
  isEducationOpen:Boolean=false;
  isCertiOpen:Boolean=false;
  isSkillOpen:Boolean=false;
  constructor(private titleService:Title,private renderer:Renderer2){

  }

  ngOnInit(){
    this.titleService.setTitle('Sayan - Resume');
  }

  downloadFile(){
    const link=this.renderer.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href','assets/Sayanthan_Pathmanathan.pdf');
    link.setAttribute('download','Sayanthan_Pathmanathan.pdf');
    link.click();
    link.remove();
  }
}
