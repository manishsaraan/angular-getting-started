import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter,  } from '@angular/core';
import { Ingridient } from '../../shared/ingridient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingridient>();

  constructor() { }

  ngOnInit(){}

  onAddItem() {
   const ingName = this.nameInputRef.nativeElement.value;
   const ingAmount = this.amountInputRef.nativeElement.value;

   const newIngredient = new Ingridient(ingName, ingAmount);
   this.ingredientAdded.emit(newIngredient);
  }

}
