import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-numbers',
	templateUrl: './numbers.component.html',
	styleUrls: ['./numbers.component.css']
})
export class NumbersComponent {
	@Input() number1!: string;
	@Input() number2!: string;
	@Input() operationStr!: string;
}
