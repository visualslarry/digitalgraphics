import { Component, OnInit } from '@angular/core';
import * as AOS from 'src/aos.js';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  linkActive:any[] = [
    ['/',false],
    ['/web',false],
    ['/graphisme',false],
    ['/marketing',false],
    ['/photographie-video',false],
    ['/contact',false]
  ];

  constructor() { 
    // console.log(window.location.pathname);
    this.updateNavbarLink(window.location.pathname);
  }

  updateNavbarLink(url)
  {
    this.linkActive.forEach(link => {
      link[1]=false;
      link[1]=(link[0]==url);
    });
    location.reload;
    // console.log(this.linkActive);
  }

  ngOnInit() {
    $(document).ready(function() {
      AOS.init();

      // Transition effect for navbar 
      $(window).scroll(function() {
        // checks if window is scrolled more than 10px, adds/removes solid class
        if($('.navbar').scrollTop() > -10) { 
            $('.navbar').addClass('solid-bg');
        } else {
            $('.navbar').removeClass('solid-bg');
        }
      });
    });

  }

}
