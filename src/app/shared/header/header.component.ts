import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable} from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @ViewChild('input',{static:true}) view:ElementRef;

  constructor() { }

  ngOnInit(): void {

    this.view.nativeElement.value = 'nuevo valor enviado';
    this.loadSuscribe();
  }

  loadSuscribe(){
      const observator = new Observable((suscriber) =>{
            suscriber.next('peticion 1');
            suscriber.next('peticion 1');
            suscriber.next('peticion 1');
            suscriber.next('peticion 1');
            suscriber.complete();
      });


      observator.subscribe(console.log);
  }

}
