import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { OutletContext } from '@angular/router';

@Component({  // Decorador que define el componente con su selector, plantilla y estilo correspondiente 
  selector: 'dbz-list',
  templateUrl: './list.component.html', 
  styleUrl: './list.component.css'
})
export class ListComponent { 
@Input()  // Decorador que permite que la propiedad characterList lo reciba del componente padre
  public characterList: Character[] = [{  // Características del personaje
    name:'Trunk',
    power: 10
  }]

//onDeleteId = Index value= number,

@Output()  // Decorador que define la emisión del evento al eliminar un personaje
public onDelete: EventEmitter<number> = new EventEmitter();


onDeteteCharacter(index:number):void{

   this.onDelete.emit(index);

  }

}
