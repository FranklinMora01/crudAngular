import { Component } from '@angular/core';
import { SideBarComponent } from '../../../../shared/components/side-bar/side-bar.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home-pages',
  standalone: true,
  imports: [SideBarComponent, RouterOutlet],
  templateUrl: './home-pages.component.html',
  styleUrl: './home-pages.component.css'
})
export class HomePagesComponent {

}
