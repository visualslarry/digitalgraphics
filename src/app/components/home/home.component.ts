import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as $ from 'jquery';
import * as AOS from 'src/aos.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router){
    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
       return false;
    }
    this.router.events.subscribe((evt) => {
       if (evt instanceof NavigationEnd) {
          // trick the Router into believing it's last link wasn't previously loaded
          this.router.navigated = false;
          // if you need to scroll back to top, here is the right place
          window.scrollTo(0, 0);
       }
   });
  }


  ngOnInit() {
    $(document).ready(function() {
      AOS.init();
      // Transition effect for navbar 
      $(window).scroll(function() {
        // checks if window is scrolled more than 10px, adds/removes solid class
        if($(this).scrollTop() > 50) { 
            $('.navbar').addClass('solid-bg');
        } else {
            $('.navbar').removeClass('solid-bg');
        }
      });
    });

  }


}
