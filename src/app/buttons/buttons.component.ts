import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-buttons',
	templateUrl: './buttons.component.html',
	styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
	@Output() addNumberEvent=new EventEmitter<number>();
	@Output() removeNumberEvent=new EventEmitter();
	@Output() multEvent = new EventEmitter();
	@Output() divEvent = new EventEmitter();
	@Output() clearAllEvent = new EventEmitter();
	@Output() minusEvent = new EventEmitter();
	@Output() sumEvent = new EventEmitter();
	@Output() addPointEvent = new EventEmitter();
	@Output() loadResultEvent = new EventEmitter();

	addNumber(num:number){
		this.addNumberEvent.emit(num);
	}

	removeNumber(){
		this.removeNumberEvent.emit();
	}

	mult(){
		this.multEvent.emit();
	}

	div(){
		this.divEvent.emit();
	}

	clearAll(){
		this.clearAllEvent.emit();
	}

	minus(){
		this.minusEvent.emit();
	}

	sum(){
		this.sumEvent.emit();
	}

	addPoint(){
		this.addPointEvent.emit();
	}

	loadResult(){
		this.loadResultEvent.emit();
	}

}