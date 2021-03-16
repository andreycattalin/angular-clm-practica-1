import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  username = "Andrey Marin"

  blueVisible = true
  greenVisible = true
  greenText = "Ocultar mensaje"

  peliculas: string[] = [
    "Vengadores",
    "Deadpool",
    "Black phanter",
    "El becario",
    "Sherlock",
    "Iron man"
  ]
  isFilmEmpty = false

  changeGreen() {
    this.greenVisible = !this.greenVisible // si greenVisible == true lo convierte en false y al contrario

    if(this.greenVisible) {
      this.greenText = "Ocultar mensaje"
    } else {
      this.greenText = "Mostrar mensaje"
    }
  }

  addFilm(data: any) {

    if(data.value.trim() == "") {
      this.isFilmEmpty = true
      return
    } else {
      this.isFilmEmpty = false
    }

    this.peliculas.push(data.value)
    data.value = ""
  }

  deleteFilm(pos: number) {
    this.peliculas.splice(pos,1)
  }

}
