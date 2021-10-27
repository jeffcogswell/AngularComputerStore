import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
	providedIn: 'root'
})
export class InventoryService {

	items: Item[] = [
		{ name: 'Keyboard', price: 25.00, quantity: 5 },
		{ name: 'Mouse', price: 15.00, quantity: 8 },
		{ name: 'Flashdrive', price: 20.00, quantity: 7 }
	];
	constructor() { }

	readAll(): Item[] {
		return this.items;
	}

	add(theItem: Item) {
		this.items.push(theItem);
	}

	update() {
		// Let's wait on this one
		// Normally this is where we would send it back to the database
	}

	delete(theItem: Item) {
		let i = this.items.indexOf(theItem);
		if (i > -1) {
			this.items.splice(i, 1);
		}
	}
}
