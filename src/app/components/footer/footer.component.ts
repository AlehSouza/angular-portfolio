import { Component, Input, OnInit } from '@angular/core';
import { Midia } from '../../models/midia.model';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee, fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  @Input() midia?: Midia[]

  Currently = new Date();
  CurrentYear = this.Currently.getFullYear();
  
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faCoffee);
  }

  ngOnInit(): void {
  }

}
