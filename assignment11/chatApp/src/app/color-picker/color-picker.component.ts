import { Component, OnInit, ViewContainerRef, Input, EventEmitter, Output } from '@angular/core';
import { ColorPickerService } from 'ngx-color-picker';

//source: https://www.eduforbetterment.com/how-to-use-color-picker-in-angular/

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  public color1: string = '#2889e9';
  constructor(
    public vcRef: ViewContainerRef,
    private cpService: ColorPickerService
  ) { }

  ngOnInit(): void {
  }

  @Output() result = new EventEmitter();


  public onChangeColor(color: string) {
    const hsva = this.cpService.stringToHsva(color);
    const rgba = this.cpService.hsvaToRgba(hsva);

    // console.log(color);
    // console.log(rgba);

    this.result.emit(color);

    return this.cpService.rgbaToCmyk(rgba);
  }

}
