import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,HomeComponent,AboutComponent,ProjectsComponent,ContactComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'Khushpreet-Portfolio';

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
  gsap.from("#nav", {y: -100, duration: 2,opacity: 0})
  gsap.from(".image",{x: 100, duration: 2,opacity: 0})
  var tl = gsap.timeline();
  tl.from(".home .text h1", {x: -100, duration: 1,opacity: 0});
  tl.from(".home .text p", {y: 50, duration: 1,opacity: 0});
  tl.from(".home .text a", { opacity: 0, duration: 1, ease: "power2.out" });

   //about
gsap.from('.about .text p,.about .text button', {
  y: 80,opacity: 0,duration: 1.5,
  scrollTrigger: {
      trigger: '.about .text',
      scroller: 'body',
      start: 'top 65%',
  }

})

gsap.from('.about li', {
  x: 30,opacity: 0,duration: 1, stagger: .3,
  scrollTrigger: {
      trigger: '.about .text',
      scroller: 'body',
      start: 'top 65%',
  }

})

//project

gsap.from('.project img', {
  x:-80,opacity: 0,duration: 1.5, stagger: .5,
  scrollTrigger: {
      trigger: '.project img',
      scroller: 'body',
      start: 'top 65%',
  }
})
gsap.from('.project video', {
  x:-80,opacity: 0,duration: 1.5, stagger: .5,
  scrollTrigger: {
      trigger: '.project video',
      scroller: 'body',
      start: 'top 65%',
  }
})


//contact

gsap.from('.contact .form .form-control,.contact .form button,.contact .form p,.contact .info p, .contact .info li', {
  y:80,opacity: 0,duration: .5, stagger: .2,
  scrollTrigger: {
      trigger: '.contact h1',
      scroller: 'body',
      start: 'top 65%',
  }
})


  }

  

}


