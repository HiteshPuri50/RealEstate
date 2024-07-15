import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { AuthApiService } from 'src/app/services/auth-api.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css']
})
export class PaymentGatewayComponent {
  property: any;
  constructor(private route : ActivatedRoute, private auth : AuthApiService, private payment : PaymentService,
    private router : Router
  ){}
  @ViewChild('paymentRef', {static : true}) paymentRef !: ElementRef;
  id: any;
  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });
    this.auth.getProperty(this.id).subscribe((res)=>{
      this.property = res[0];
    }, (err)=>{
      console.log(err);
    })
    window.paypal.Buttons(
      {
        createOrder : (data : any, actions : any) =>{
          return actions.order.create({
            purchase_units : [
              {
                amount : {
                  value : this.property.price,
                  currency_code : 'USD'
                }
              }
            ]
          })
        },
        onApprove : (data :any , actions :any) =>{
          return actions.order.capture().then( (details : any) =>{
            if(details.status == 'COMPLETED'){
              this.payment.transactionID = details.id;
              this.router.navigate(['confirm']);
            }
          })
        },
        onError : (error :any) =>{
          console.log(error);
        }
      }
    ).render(this.paymentRef.nativeElement)
  }
}
