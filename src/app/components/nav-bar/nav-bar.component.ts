import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatToolbarModule, RouterModule, MatIconModule ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  
}
