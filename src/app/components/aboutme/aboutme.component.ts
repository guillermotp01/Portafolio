import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.sass'
})
export class AboutmeComponent{

  descargarCV(): void {
    const urlCV: string = 'assets/docs/CV-Guillermo-Trujillo-Pantoja.pdf';
  
    const enlaceDescarga: HTMLAnchorElement = document.createElement('a');
    enlaceDescarga.href = urlCV;
    enlaceDescarga.download = 'CV-Guillermo-Trujillo-Pantoja';
  
    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();
  
    document.body.removeChild(enlaceDescarga);
  }
  
}
