import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  standalone: false,
  templateUrl: './todo-add.html',
  styleUrl: './todo-add.css'
})
export class TodoAdd implements OnInit{

  txtInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('', Validators.required);
  } 
  ngOnInit(): void {
    
  }

  agregar() {
    if (this.txtInput.valid) {
      this.store.dispatch(actions.crear({ texto: this.txtInput.value }));
      console.log(this.txtInput.value);
      this.txtInput.reset();
    } else {
      console.error('Input is invalid');
    }
  }
}
