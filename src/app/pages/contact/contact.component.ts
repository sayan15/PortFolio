import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private titleService:Title){

  }

  ngOnInit(){
    this.titleService.setTitle('Sayan - Contact');
  }
}
