import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Midia } from '../../models/midia.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  @Input()
  user!: User;

  @Input()
  tags!: string[];

  @Input()
  midias!: Midia[]

  ngOnInit(): void {
  }
} 
