import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ColorPickerService } from 'ngx-color-picker';

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
  public onChangeColor(color: string) {
    const hsva = this.cpService.stringToHsva(color);
    const rgba = this.cpService.hsvaToRgba(hsva);

    console.log(color);
    console.log(rgba);
    return this.cpService.rgbaToCmyk(rgba);
  }

}
