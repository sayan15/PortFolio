import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../../_models/Project';
import { Tag } from '../../_models/Tag';
import { ProjectsService } from '../../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects: Project[];
  filtering:Boolean=false;
  isCollapsed: boolean = true;
  typeScript: boolean = false;
  angular: boolean = false;
  javascript: Boolean = false;
  python: Boolean = false;
  csharp: Boolean = false;
  java: Boolean = false;
  kotlin: boolean = false;
  nodejs: boolean = false;
  aspnet: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {

  }

  ngOnInit() {
    this.titleService.setTitle('Sayan - Portfolio');
    this.projects = this.projectService.getProject();
  }

  filter() {
    let filterTags: Tag[] = [];
    if (this.typeScript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.python) {
      filterTags.push(Tag.PYTHON);
    }
    if (this.csharp) {
      filterTags.push(Tag.CSHARP);
    }
    if (this.java) {
      filterTags.push(Tag.JAVA);
    }
    if (this.nodejs) {
      filterTags.push(Tag.NODEJS);
    }
    if (this.aspnet) {
      filterTags.push(Tag.ASPNET);
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if (this.kotlin) {
      filterTags.push(Tag.Kotlin);
    }

    if (this.python || this.csharp || this.java || this.angular || this.typeScript || this.nodejs || this.aspnet || this.javascript || this.kotlin) {
      this.filtering = true;}
      else {
      this.filtering = false;
      }
    this.projects = this.projectService.getProjectsByFilter(filterTags);
  }

  resetFilter(){
    this.typeScript= false;
    this.angular = false;
    this.javascript = false;
    this.python = false;
    this.csharp = false;
    this.java = false;
    this.kotlin = false;
    this.nodejs = false;
    this.aspnet = false;
    this.filtering=false;

    this.projects = this.projectService.getProject();
  }
}
