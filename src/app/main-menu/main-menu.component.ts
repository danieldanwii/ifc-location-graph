import { Component, NgModule, ViewChild, ElementRef} from '@angular/core';

import { IfcService } from '../services/ifc.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent{

  constructor(private ifcService: IfcService) {
  }

  @ViewChild('openIfcFile', {static: false}) openIfcFile?: ElementRef;
  @ViewChild('openProject', {static: false}) openProject?: ElementRef;

  onOpenIfcFile(){
    this.openIfcFile?.nativeElement.addEventListener('change', (event: Event) => {
      const target = event.target as HTMLInputElement;

      if(!target.files) return;

      const ifcFile: File = target.files[0];
      this.ifcService.loadIfc(ifcFile);
    })
  }

  onGetSpaces(){
    this.ifcService.showIfcSpaces();
  }

  
}
