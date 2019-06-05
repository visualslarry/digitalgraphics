import { Component, OnInit } from '@angular/core';
import * as AOS from 'src/aos.js';
import * as $ from 'jquery';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  linkActive:any[] = [
    ['/',false],
    ['/creation-site-internet',false],
    ['/graphisme',false],
    ['/marketing',false],
    ['/photographie-video',false],
    ['/contact',false]
  ];

  constructor(location: PlatformLocation) { 
    // window.scrollTo({ top: 0, behavior: 'smooth' });
    // console.log(window.location.pathname);
    location.onPopState(() => {
      this.updateNavbarLink(window.location.pathname);
    });
    this.updateNavbarLink(window.location.pathname);
  }

  updateNavbarLink(url)
  {
    this.linkActive.forEach(link => {
      link[1]=false;
      link[1]=(link[0]==url);
    });
    $(document).ready(function() {
      $('.navbar-collapse').removeClass('show');
      document.getElementById("scroll-progress-bar").style.width = "0%";
    });
    // location.reload;
    // console.log(this.linkActive);
  }


  ngOnInit() {
    $(document).ready(function() {
      AOS.init();
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("scroll-progress-bar").style.width = scrolled + "%";

      // Transition effect for navbar 
      $(window).scroll(function() {
        // checks if window is scrolled more than 1px, adds/removes solid class
        if($('.navbar').scrollTop() > -1) { 
          $('.navbar').addClass('solid-bg');
          $('.nav-progress-bar').addClass('opacity-1');
        }
        
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("scroll-progress-bar").style.width = scrolled + "%";
        
      });
    });

  }

}
