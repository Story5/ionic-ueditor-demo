import { Component, ViewChild } from '@angular/core';
import { HomePage } from '../home/home';
import { QuillPage } from '../quill/quill';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  root1 = QuillPage;
  root2 = HomePage;

  constructor() {
  }
}
