import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [NgFor],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.scss'
})
export class StackComponent {
  stacks = [
    {
      name: "JavaScript",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    },
    {
      name: "TypeScript",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
    },
    {
      name: "React",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },
    {
      name: "Vue",
      image: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
    },
    {
      name: "Angular",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Angular_gradient.png/1200px-Angular_gradient.png",
    },
    {
      name: "MongoDB",
      image: "https://miro.medium.com/max/512/1*doAg1_fMQKWFoub-6gwUiQ.png",
    },
    {
      name: "Git",
      image: "https://miro.medium.com/max/383/1*co_1qORNdM0PI1nvCp7Iig.png",
    },
    {
      name: "Vercel",
      image: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
    },
  ]
}
