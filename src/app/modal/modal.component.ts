import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  mostrar: boolean = false;

  toggle (){
    this.mostrar = !this.mostrar;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
