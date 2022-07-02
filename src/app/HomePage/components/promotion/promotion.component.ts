import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss'],
})
export class PromotionComponent implements OnInit {

 slideIndex = 0;

ngOnInit(){
this.auto();
  }

 showSlides(n:number) {
  let i;
  let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // this.slideIndex++;
  // if (this.slideIndex > slides.length) {this.slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[this.slideIndex-1].style.display = "block";
  dots[this.slideIndex-1].className += " active";
  // setTimeout(()=>this.auto(),5000); // Change image every 2 seconds
}

auto(){
  let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
  let dots = document.getElementsByClassName("dot");
  this.slideIndex++;
  if(this.slideIndex>slides.length){
    this.slideIndex = 1;
  }
  // console.log(this.slideIndex)
  this.showSlides(this.slideIndex);
  setTimeout(()=>this.auto(), 5000);

}
plusSilde(n:number){
let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
  let dots = document.getElementsByClassName("dot");
  // console.log(this.slideIndex)
  this.slideIndex += n;
  if(this.slideIndex > slides.length){
    this.slideIndex = 1;
  }
  if(this.slideIndex<1){
    this.slideIndex = slides.length;
  }
  this.showSlides(this.slideIndex)

}
currentSilde(n: number){
  this.slideIndex = n;
  this.showSlides(this.slideIndex)
}

}


