import { Component } from '@angular/core';
import * as prodata from 'src/app/data/products.json';
@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})

export class DirectivesComponent {

  // table
employees:employee[]=[{
  id:1,
  name:"Batman",
  age:40,
  dept:"Justice League",
  dob:"22/07/2003",
  image:"https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQavfSfyOVYO54wkFq1cV0yguHfZSUiYwmiGvtdlDDav_wKZYsyy9NPBk952R2zXNSs"
},
{
  id:2,
  name:"Superman",
  age:200,
  dept:"Justice League",
  dob:"12/07/1802",
  image:"data:image/jpeg;base64,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"
},
{
  id:3,
  name:"IronMan",
  age:70,
  dept:"Avengers",
  dob:"12/07/1963",
  image:"data:image/jpeg;base64,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"
}]

// cards

// productdata:products[]=prodata

}

interface employee{
  id:number;
  name : string;
  age:number;
  dept:string;
  dob:string;
  image:string;
}

// interface products{
//   id:number;
//   pname:string,
//   price:string
// }