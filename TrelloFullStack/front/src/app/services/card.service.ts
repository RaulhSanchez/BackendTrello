import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private apiUrl = 'http://localhost:3000/api/cards'; // Ajusta la URL según tu configuración de backend

  constructor(private http: HttpClient) {}

  // Método para agregar una nueva card
  agregarCard(nuevaCard: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, nuevaCard);
  }

  // Método para actualizar el estado de una card por su ID
  actualizarEstadoCard(cardId: string, nuevoEstado: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${cardId}/estado`, { estado: nuevoEstado });
  }
}
