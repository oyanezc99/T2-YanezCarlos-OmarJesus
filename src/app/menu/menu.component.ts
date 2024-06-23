import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet,],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private router: Router, private route:ActivatedRoute){}
  irPreguntaDos():void{
    this.router.navigate(["pregunta-dos"], {relativeTo: this.route})
  }
  irPreguntaTres():void{
    this.router.navigate(["pregunta-tres"], {relativeTo: this.route})
  }
  irPreguntaCuatro():void{
    this.router.navigate(["pregunta-cuatro"], {relativeTo: this.route})
  }
}
