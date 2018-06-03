import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Stripe } from '@ionic-native/stripe';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


//Inserción de ejemplo
/*
   card : any = {
    number: '4242424242424242',
    expMonth: 7,
    expYear: 2017,
    cvc: '408'
   };
   card = {
    number: '4242424242424242',
    expMonth: 12,
    expYear: 2020,
    cvc: '220'
   };

   */
 //Objeto que contendrá el token
   cadena = {
    tokeng : ''
   }
//Parametros de la transacción
   card :any = {
    number: '',
    expMonth: '',
    expYear: '',
    cvc: ''
   };

   text:string = '';

  constructor(public navCtrl: NavController, private stripe: Stripe) {
  //Empleo de la Api para publicar la clave
    this.stripe.setPublishableKey('pk_test_NArsQrKiBXVVifDUTU0kl5Z2');

  }

  ionViewDidLoad(): void{

    this.stripe.setPublishableKey('pk_test_NArsQrKiBXVVifDUTU0kl5Z2');
  }
  
  stripeSend(): void{
    //Envio de token
    this.stripe.createCardToken(this.card)
   .then(token => //console.log(token.id)
    {
      this.cadena.tokeng = token.id;
      console.log(token.id);
    }
    )
   .catch(error => console.error(error));

  }

}
