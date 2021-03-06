import { Component } from '@angular/core';
import { OrderService } from 'shared/services/order.service';
import { AuthService } from 'shared/services/auth.service';
import { switchMap } from 'rxjs/operators';
 
@Component({
  selector: 'admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {
  orders$;
  
  constructor(
    private authService: AuthService,
    private orderService: OrderService
  ) { 
    this.orders$ = authService.user$.pipe(switchMap(u => orderService.getOrders()));
  }

}
