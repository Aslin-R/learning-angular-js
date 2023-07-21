import { Component } from '@angular/core';

@Component({
  selector: 'app-toplanguages',
  templateUrl: './toplanguages.component.html',
  styleUrls: ['./toplanguages.component.css']
})
export class ToplanguagesComponent {


  
  languages:any[] = [
    {name:'python', value:'python'},
    {name:'java', value:'java'},
    {name:'c', value:'c'},
    {name:'c++', value:'c++'},
    {name:'javascript', value:'javascript'},
    {name:'php', value:'php'},
    ];
}
