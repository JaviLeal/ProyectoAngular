import { Character } from './../interfaces/character.interface';
import { Component} from '@angular/core';


@Component({  // Decorador que define el componente con su selector y plantilla correspondiente
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  public characters: Character[] = [{  // Array que contiene la lista de los personajes y sus características
    name: 'Krillin',
    power: 1000
  },{
    name:'Goku',
    power: 9500
  },{
    name:"Vegeta",
    power: 7500
  }];

 // onDelete = Index value: number;

  onNewCharacter(character:Character): void{  // Método que agrega un nuevo personaje a la lista
    this.characters.push(character);
  }

  onDeleteCharacter(index:number){  // Método para eliminar un personaje de la lista basándose en su índice

    //this.characters.splice(1,2)
    this.characters.splice(index,1);
  }

}
