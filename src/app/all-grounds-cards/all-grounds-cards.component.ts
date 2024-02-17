import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-all-grounds-cards',
  templateUrl: './all-grounds-cards.component.html',
  styleUrl: './all-grounds-cards.component.css'
})
export class AllGroundsCardsComponent {
 @Input() receive:any
}
