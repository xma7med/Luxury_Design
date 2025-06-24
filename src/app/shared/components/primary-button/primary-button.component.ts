import { Component, Input } from '@angular/core';
// import { ButtonModule } from 'primeng/button';
import { ButtonModule } from 'primeng/button';



/// Satnd alone component so no need for declaration at @NGModule
@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports:[ButtonModule],
  template: `
    <button
      pButton
      [label]="label"
      class="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full">
    </button>
  `
})
/// just if u use not stand alone component
/// @NgModule({
/// declartion ....
///   imports:[
///     ButtonModule
///   ]
/// export
/// })
export class PrimaryButtonComponent {
  @Input() label = 'Click';
}
