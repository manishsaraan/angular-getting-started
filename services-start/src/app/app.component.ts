import { Component, OnInit } from '@angular/core';
import { AccountService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent implements OnInit {

  accounts = [];
  constructor(private accountsService: AccountService) {

  }

  ngOnInit() {
    console.log("-accounts", this.accountsService.accounts)
    this.accounts = this.accountsService.accounts;
  }
}
