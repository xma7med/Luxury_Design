
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';

// Example shared component
//import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';

// @Component
@NgModule({
  // declarations: [
  //   //PrimaryButtonComponent
  // ],
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    DropdownModule,
    CardModule
  , PrimaryButtonComponent

  ],
  exports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    DropdownModule,
    CardModule
  , PrimaryButtonComponent
  ]
})
export class SharedModule {}
