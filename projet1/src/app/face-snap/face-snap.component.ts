import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttontext!:string;


  ngOnInit() {
    this.title = 'Massamo';
    this.description = 'Mon meilleur ami depuis tout petit !';
    this.createdDate = new Date();
    this.snaps = 6;
    this.buttontext = "Add snap"
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  }

  onSnap() {
    if(this.buttontext === 'Add snap')
    {
      
      this.snaps++ ;
      this.buttontext = "Oops, Unsnap"
      
    }
    else if(this.buttontext === 'Oops, Unsnap') {
      this.snaps-- ;
      this.buttontext = "Oh snap"
    }
    else if(this.buttontext ==='Oh snap'){
      this.snaps++ ;
      this.buttontext = "Oops, Unsnap"
    }
    
  }

  onRemoveSnap() {
    this.snaps--;
  }

  


}
