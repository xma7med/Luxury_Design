import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [...SHARED_IMPORTS , CommonModule, RouterModule, ButtonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
constructor(private route: ActivatedRoute) {}
  // constructor(private router: Router, private route: ActivatedRoute) {}
//  ngOnInit() {
//     this.router.events.pipe(
//       filter(e => e instanceof NavigationEnd)
//     ).subscribe(() => {
//       const fragment = this.route.snapshot.fragment;
//       if (fragment) {
//         setTimeout(() => {
//           const el = document.getElementById(fragment);
//           if (el) {
//             el.scrollIntoView({ behavior: 'smooth' });
//           }
//         }, 50); // تأخير بسيط يضمن إن DOM اتـrender
//       }
//     });
//   }



  // }
  ngOnInit() {
  this.route.fragment.subscribe(fragment => {
    if (fragment) {
      document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
    }
  });
  }

  scrollToContact() {
  const el = document.getElementById('ContactSection');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}










//   scrollToAbout() {
//   const aboutSection = document.getElementById('aboutSection');
//   if (aboutSection) {
//     aboutSection.scrollIntoView({ behavior: 'smooth' });
//   }
// }
}
