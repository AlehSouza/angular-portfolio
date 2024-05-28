import { Component } from '@angular/core';

@Component({
  selector: 'app-trajectory',
  standalone: true,
  imports: [],
  templateUrl: './trajectory.component.html',
  styleUrl: './trajectory.component.scss'
})
export class TrajectoryComponent {
  trajectory = [
    {
      title: {
        pt_br: `ConferenciaCorp`,
        eng: `ConferenciaCorp`,
      },
      text: {
        pt_br: `Atuei como desenvolvedor FullStack com as linguagens PHP, Node, Mysql, JS e HTML & CSS.`,
        eng: `I worked as a FullStack developer with PHP, Node, Mysql, JS and HTML & CSS languages.`,
        date: '03/02/2020'
      },
    },
    // {
    //   title: {
    //     pt_br: `Keycash`,
    //     eng: `Keycash`,
    //   },
    //   text: {
    //     pt_br: `Atuei como Quality Assurance(QA), escrevendo testes e fazendo fluxos no sistema.`,
    //     eng: `I worked as Quality Assurance(QA), writing tests and making flows in the system.`,
    //     date: '30/04/2021'
    //   },
    // },
    {
      title: {
        pt_br: `Keycash`,
        eng: `Keycash`,
      },
      text: {
        pt_br: `Atuei como desenvolvedor Front-End, com as tecnologias, JavaScript, HTML, CSS e Vue.`,
        eng: `I worked as a Front-End developer, with the technologies, JavaScript, HTML, CSS and Vue.`,
        date: '16/02/2022'
      },
    },
    {
      title: {
        pt_br: `Money Money Invest`,
        eng: `Money Money Invest`,
      },
      text: {
        pt_br: `Atuei como desenvolvedor Front-End, com as tecnologias, JavaScript, HTML, CSS, com o framework NextJs(React).`,
        eng: `I worked as a Front-End developer, with technologies, JavaScript, HTML, CSS, with the NextJs(React) framework.`,
        date: '25/06/2024'
      },
    },
    {
      title: {
        pt_br: `Smarters`,
        eng: `Smarters`,
      },
      text: {
        pt_br: `Atuo como desenvolvedor Front-End, com as tecnologias, TypeScript, HTML, CSS, com o framework Angular.`,
        eng: `I worked as a Front-End developer, with technologies, TypeScript, HTML, CSS, with the Angular framework.`,
        date: '07/05/2024'
      },
    },
    {
      title: {
        pt_br: `...`,
        eng: `News soon`,
      },
      text: {
        pt_br: `Por enquanto, essa é a minha jornada no mercado de trabalho como Desenvolvedor e Quality Assurance.`,
        eng: `For now, this is my journey in the job market as a Developer and Quality Assurance. <br> Thanks!`,
        date: ''
      },
    },
  ]
}
