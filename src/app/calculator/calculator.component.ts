import { Component } from '@angular/core';

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
	operationStr: string = "";

	addNumber(numberToAdd: number) {
		if (this.isTurnNumber2 && this.number2.length<13) {
			this.number2 += numberToAdd;
		}
		else if(this.number1.length<13){
			this.number1 += numberToAdd;
		}
	}

	removeNumber() {
		if (this.isTurnNumber2) {
			this.number2 = this.number2.substring(0, this.number2.length - 1);
		}
		else {
			this.number1 = this.number1.substring(0, this.number1.length - 1);
		}
	}

	sum() {
		if (this.number1 === "") {
			this.number1 = "0";
		}
		this.operation = 1;
		this.isTurnNumber2 = true;
		this.operationStr = "+";
	}

	minus() {
		if (this.number1 === "") {
			this.number1 = "0";
		}
		this.operation = 2;
		this.isTurnNumber2 = true;
		this.operationStr = "-";
	}

	mult() {
		if (this.number1 === "") {
			this.number1 = "0";
		}
		this.operation = 3;
		this.isTurnNumber2 = true;
		this.operationStr = "*";
	}

	div() {
		if (this.number1 === "") {
			this.number1 = "0";
		}
		this.operation = 4;
		this.isTurnNumber2 = true;
		this.operationStr = "/";
	}

	addPoint() {
		if (this.isTurnNumber2 && !this.number2.includes(".") && parseInt(this.number2) !== 0 && this.number2 !== "") {
			this.number2 += ".";
		}
		else if (!this.number1.includes(".") && parseInt(this.number1) !== 0 && this.number1 !== "") {
			this.number1 += ".";
		}
	}

	loadResult() {
		switch (this.operation) {
			case 0:
				if (this.number1 !== "") {
					this.result = parseFloat(this.number1);
					this.reset();
				}
				break;
			case 1:
				if (this.number2 !== "") {
					this.result = parseFloat(this.number1) + parseFloat(this.number2);
					this.reset();
				}
				break;
			case 2:
				if (this.number2 !== "") {
					this.result = parseFloat(this.number1) - parseFloat(this.number2);
					this.reset();
				}
				break;
			case 3:
				if (this.number2 !== "") {
					this.result = parseFloat(this.number1) * parseFloat(this.number2);
					this.reset();
				}
				break;
			case 4:
				if (this.number2 !== "") {
					this.result = parseFloat(this.number1) / parseFloat(this.number2);
					this.reset();
				}
				break;
		}
	}

	clearAll(){
		this.reset();
		this.result=0;
	}

	reset() {
		this.number2 = "";
		this.number1 = "";
		this.isTurnNumber2 = false;
		this.operation = 0;
		this.operationStr = "";
	}
}
