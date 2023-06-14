import { Component } from '@angular/core';

@Component({
  selector: 'app-mouseevents',
  templateUrl: './mouseevents.component.html',
  styleUrls: ['./mouseevents.component.css']
})
export class MouseeventsComponent {
// click event
color='red'
click(){
this.color='blue';
}


//doubleclick event
imgUrl="https://m.media-amazon.com/images/M/MV5BMjY2ZmMyZTMtMDBiYi00MTZlLWFmZjAtYzE2NWE4OTBmYTJiXkEyXkFqcGdeQXVyMTI1MzYzODMy._V1_FMjpg_UX1000_.jpg"
dblClick(){
this.imgUrl="https://upload.wikimedia.org/wikipedia/en/d/d6/Superman_Man_of_Steel.jpg";
}

//mouseover event
HoverMe='HoverMe'
mouseOver(){
  this.HoverMe='You are Hovering Me';
}

//mouseenter event
text1='Mouse Enter Effect'
mouseEnter(){
this.text1='Mouse Entered'
}

// mouseleave event
mouseLeave(){
  this.HoverMe='HoverMe';
  this.text1='Mouse Enter Effect'
}

//mousedown event
bgcolor="orangered"
mouseDown(){
this.bgcolor="blue";
}

//mouseup
mouseUp(){
  this.bgcolor="orangered";
}

//drag
dogUrl="/assets/images/dog1.png"
drag(){
  this.dogUrl="/assets/images/dog2.png";
}

dragOver(){
  this.dogUrl="/assets/images/dog1.png"
}
}
