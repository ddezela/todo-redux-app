import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { TodoAdd } from './todo-add/todo-add';
import { TodoFooter } from './todo-footer/todo-footer';
import { TodoItem } from './todo-item/todo-item';
import { TodoList } from './todo-list/todo-list';
import { TodoPage } from './todo-page/todo-page';
import { FiltroPipe } from './filtro-pipe';



@NgModule({
  declarations: [
    TodoAdd,
    TodoFooter,
    TodoItem,
    TodoList,
    TodoPage,
    FiltroPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoPage
  ]
})
export class TodoModule { }
