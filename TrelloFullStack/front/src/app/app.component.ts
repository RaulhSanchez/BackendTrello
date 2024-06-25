// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  columns = [
    { estado: 'add-card', title: 'Add Card' },
    { estado: 'to-do', title: 'To Do' },
    { estado: 'in-progress', title: 'In Progress' },
    { estado: 'done', title: 'Done' }
  ];

  cards: any[] = [
    { titulo: 'Card 1', contenido: 'Contenido de la Card 1', estado: 'to-do', taskId: '1' },
    { titulo: 'Card 2', contenido: 'Contenido de la Card 2', estado: 'in-progress', taskId: '2' },
    { titulo: 'Card 3', contenido: 'Contenido de la Card 3', estado: 'done', taskId: '3' }
  ];

  addCard(estado: string) {
    const newCard = {
      titulo: 'Nueva Card',
      contenido: 'Contenido de la Nueva Card',
      estado: estado,
      taskId: '4' // Genera un ID único para la tarea
    };
    this.cards.push(newCard);
  }
}
