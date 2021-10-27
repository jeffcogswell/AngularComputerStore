import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { Item } from '../item';

@Component({
	selector: 'app-store',
	templateUrl: './store.component.html',
	styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

	myinv: Item[];

	newName?: String;
	newPrice?: Number;
	newQuantity?: Number;

	constructor(private inventory: InventoryService) {
		this.myinv = this.inventory.readAll();
		console.log(this.myinv);
	}

	ngOnInit(): void {
	}

	addItem() {
		if (this.newName && this.newPrice && this.newQuantity) {
			this.inventory.add(
				{
					name: this.newName,
					price: this.newPrice,
					quantity: this.newQuantity
				}
			);
		}
	}

	debug() {
		console.log(this.inventory.readAll());
		console.log(this.newName);
		console.log(this.newPrice);
	}

}
