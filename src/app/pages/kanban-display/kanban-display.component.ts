import { Component, OnInit } from '@angular/core';
import { EnvironmentStatus } from 'src/app/models/environment.model';

@Component({
  selector: 'app-kanban-display',
  templateUrl: './kanban-display.component.html',
  styleUrls: ['./kanban-display.component.scss']
})
export class KanbanDisplayComponent implements OnInit {

  environments:EnvironmentStatus [] = [{
    statusId: 0,
    description: "Enviroments",
    environments: []
  },
  {
    statusId: 1,
    description: "In-Use",
    environments: []
  },
  {
    statusId: 2,
    description: "Broken / unavalible",
    environments: []
  }]





  constructor() { }




  ngOnInit(): void {

    this.environments.push()


 
  }

}

