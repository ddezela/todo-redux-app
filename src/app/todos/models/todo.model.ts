export class Todo {
  id: number;
  texto: string;
  completado: boolean;

  constructor(texto: string, completado: boolean = false) {
    this.id = Math.random()*100000000000000000; // Genera un ID único
    this.texto = texto;
    this.completado = completado;
  }

  toggleCompletion() {
    this.completado = !this.completado;
  }
}   