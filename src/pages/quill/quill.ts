import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import  Quill  from 'quill';

/**
 * Generated class for the QuillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-quill',
  templateUrl: 'quill.html',
})
export class QuillPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuillPage');
    this.initEditor();
  }

  initEditor() {
    var editor = new Quill('#editor', {
      modules: { toolbar: '#toolbar' },
      theme: 'snow'
    });
  }

}
