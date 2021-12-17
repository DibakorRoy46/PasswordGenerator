import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  useNumber=false;
  useLetter=false;
  userSymbol=false;
  length=0;
  password='';
  UseNumbers()
  {
    this.useNumber=!this.useNumber;
  }
  UseLetters()
  {
    this.useLetter=!this.useLetter;
  }
  UseSymbols()
  {
    this.userSymbol=!this.userSymbol;
  }
  GetPasswordLength(value:string)
  {
     const valueParse=parseInt(value);
     if(!isNaN(valueParse))
     {
       this.length=valueParse;     
     }
  }
  onButtonClick()
  {
    const letters='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers='1234567890';
    const symbols='~`!@#$%^&*()_-+={}[]:;"<>,.?/';
    let generator='';
    if(this.useNumber)
    {
       generator+=numbers;
    }
    if(this.useLetter)
    {
      generator+=letters;
    }
    if(this.userSymbol)
    {
      generator+=symbols;
    }
    let finalPassword='';

    for(let i=0;i<this.length;i++)
    {
      const index=Math.floor(Math.random()*generator.length);
      finalPassword+=generator[index];
    }
    this.password=finalPassword;  
  }
}
