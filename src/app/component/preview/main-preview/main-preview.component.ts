import {Component} from '@angular/core';
import {CharacterService} from '../../../service/character.service';
import {PdfService} from '../../../service/pdf.service';

@Component({
  selector: 'main-preview',
  template: `
    <button type="button" mat-raised-button (click)="print()">Print to Pdf</button>
    <div id="preview-print">
      <mat-label>{{characterService.character.name}}</mat-label>
    </div>
  `,
  styleUrls: ['./main-preview.component.scss']
})
export class MainPreviewComponent {
  constructor(public characterService: CharacterService, private pdfService: PdfService) {
  }

  print(): void {
    this.pdfService.printPdf();
  }
}
