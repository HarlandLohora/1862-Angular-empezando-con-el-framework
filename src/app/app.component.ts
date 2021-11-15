import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  transferencia: any = {};

  transferir($event: any) {
    console.log('Este mensaje es del componente APP', $event);
    this.transferencia = $event;
  }
}
