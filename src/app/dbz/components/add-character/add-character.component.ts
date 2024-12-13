import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html', 
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
 @Output()
 public onNewCharacter: EventEmitter<Character> = new EventEmitter(); // Emite el evento cuando se agrega un nuevo personaje

    public character: Character = {  // Almacena el personaje con sus datos (esos serán sus valores iniciales)
      name:'',
      power: 0
    };

    emitCharacter():void{

      if (this.character.name.length === 0) return; // Si el nombre está vacío, no hace nada

      this.onNewCharacter.emit(this.character); // Emite el personaje 

      this.character={ name: '', power:0}; // Reinicia el objeto una vez se envíe el personaje

    }
}
