import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-get-confirmation',
  templateUrl: './get-confirmation.component.html',
  styleUrls: ['./get-confirmation.component.scss']
})
export class GetConfirmationComponent implements OnInit {
 @Input() show :  boolean = false
 @Output() emitShowFlag : EventEmitter<boolean> = new EventEmitter<boolean>()
@Output() RempveApiflag : EventEmitter<boolean> = new EventEmitter<boolean>()
 
 constructor() { }

  ngOnInit(): void {
  }

  closeModal(removeFlag:boolean){
    this.show=false
    this.emitShowFlag.emit(false)
    this.RempveApiflag.emit(removeFlag)
  }
}
