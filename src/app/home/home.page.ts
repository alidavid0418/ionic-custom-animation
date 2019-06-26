import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { customAlertEnter } from '../customAlertEnter';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alert: AlertController) {}

  async showAlert() {
    const alert = await this.alert.create({
      header: 'My custom alert',
      message: 'This is so epic',
      buttons: ['OK'],
      enterAnimation: customAlertEnter
    });
    alert.present();
  }
}
