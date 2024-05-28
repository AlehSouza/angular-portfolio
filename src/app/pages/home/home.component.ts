import { Component, OnInit } from '@angular/core';
import { StackComponent } from '../../components/stack/stack.component';
import { BreakLineComponent } from '../../components/break-line/break-line.component';
import { TrajectoryComponent } from '../../components/trajectory/trajectory.component';
import { AboutComponent } from '../../components/about/about.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { HomeService } from '../../services/home/home.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutComponent,
    TrajectoryComponent,
    StackComponent,
    BreakLineComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  midias = [
    {
      link: "https://github.com/AlehSouza",
      icon: "face",
      alt: "Github",
    },
    {
      link: "https://codepen.io/blezale/",
      icon: "sunny",
      alt: "Codepen",
    },
    {
      link: "https://www.linkedin.com/in/alehsouza/",
      icon: "forest",
      alt: "Linkedin",
    },
    {
      link: "https://drive.google.com/file/d/1XpH1JUGANvBAvgxDt0woJxhuTBBNhNVV/view?usp=sharing",
      icon: "home",
      alt: "Currículo",
    },
  ]

  tags = [
    'FrontEnd Dev',
    'Quality Assurance',
    'Free lancer'
  ]

  user!: User;

  constructor(public homeService: HomeService) {}

  ngOnInit(): void {
    this.getUserGithub()
  }

  getUserGithub() {
    this.homeService.getUser('AlehSouza').subscribe(res => {
      this.user = res
    })
  }

}
