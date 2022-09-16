import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-input-output';

  currentBeverage = "Cofee"



  beverages = ["Tea", "Milk", "Coffee", "Juice"]
  addBeverage(newBeverage:string){
    this.beverages.push(newBeverage);

    this.ClearInput();
  }

  ClearInput(){
    var txtInput = <HTMLInputElement>document.getElementById('beverage-input');
    txtInput.value = '';
  }
}

