import { Component, OnInit } from '@angular/core';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(library: FaIconLibrary) { 
    library.addIconPacks(fas, far, fab);
  }

  ngOnInit(): void {
  }

}
