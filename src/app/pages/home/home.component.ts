import { Component, OnInit } from '@angular/core';
import { StackComponent } from '../../components/stack/stack.component';
import { BreakLineComponent } from '../../components/break-line/break-line.component';
import { TrajectoryComponent } from '../../components/trajectory/trajectory.component';
import { AboutComponent } from '../../components/about/about.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { faCoffee, faGift, faLink, faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
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

  midia = [
    {
      link: "https://github.com/AlehSouza",
      icon: faGift,
      alt: "Github",
    },
    {
      link: "https://codepen.io/blezale/",
      icon: faCoffee,
      alt: "Codepen",
    },
    {
      link: "https://www.linkedin.com/in/alehsouza/",
      icon: faLink,
      alt: "Linkedin",
    },
    {
      link: "https://drive.google.com/file/d/1sm8Zl5vzos-iRuN1Ll1QAI1Oav2VDZ4O/view",
      icon: faFile,
      alt: "Currículo",
    },
  ]

  ngOnInit(): void {
  }

}
