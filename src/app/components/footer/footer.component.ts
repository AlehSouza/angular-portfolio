import { Component, Input, OnInit } from '@angular/core';
import { Midia } from '../../models/midia.model';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  @Input() midia?: Midia[]

  Currently = new Date();
  CurrentYear = this.Currently.getFullYear();
  
  ngOnInit(): void {
  }

}
