import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'shared/services/order.service';
import { take } from 'rxjs/operators';
@Component({
  selector: 'admin-order-details',
  templateUrl: './admin-order-details.component.html',
  styleUrls: ['./admin-order-details.component.css']
})
export class AdminOrderDetailsComponent {
  id;
  product$;
  
  constructor(
    route: ActivatedRoute,
    private orderService: OrderService
  ) {
    this.id = route.snapshot.paramMap.get('id');
    if(this.id) orderService.getSingleOrder(this.id).pipe(take(1)).subscribe();
  }

  async ngOnInit(){
    this.product$ = await this.orderService.getSingleOrder(this.id).pipe(take(1));
  }

}
