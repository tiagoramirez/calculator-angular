import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-calculator',
	templateUrl: './calculator.component.html',
	styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
	number1: string = "";
	number2: string = "";
	result: number = 0;
	isTurnNumber2: boolean = false;
	operation: number = 0;
	operationStr: string ="";

	addNumber(numberToAdd: number) {
		if (this.isTurnNumber2) {
			this.number2 += numberToAdd;
		}
		else {
			this.number1 += numberToAdd;
		}
	}

	removeNumber() {
		if (this.isTurnNumber2) {
			this.number2 = this.number2.substring(0, this.number2.length - 1);
			console.log(this.number2);
		}
		else {
			this.number1 = this.number1.substring(0, this.number1.length - 1);
			console.log(this.number1);

		}
	}

	sum(){
		this.operation=1;
		this.isTurnNumber2=true;
		this.operationStr="+";
	}

	minus(){
		this.operation=2;
		this.isTurnNumber2=true;
		this.operationStr="-";
	}

	loadResult() {
		switch (this.operation) {
			case 0:
				if(!isNaN(parseInt(this.number1))){
					this.result=parseInt(this.number1);
				}
				break;
			case 1:
				this.result = parseInt(this.number1) + parseInt(this.number2);
				this.reset();
				break;
			case 2:
				this.result = parseInt(this.number1) - parseInt(this.number2);
				this.reset();	
				break;
		}
	}

	reset(){
		this.number2="";
		this.number1="";
		this.isTurnNumber2=false;
		this.operation=0;
		this.operationStr="";
	}
}
