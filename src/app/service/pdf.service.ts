import {Injectable} from '@angular/core';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';
import {CharacterService} from './character.service';

@Injectable()
export class PdfService {
  constructor(private characterService: CharacterService) {
  }

  printPdf(): void {
    let el = document.getElementById('preview-print');
    html2canvas(el).then((canvas) => {
      canvas.getContext('2d');
      let HTML_Width = canvas.width;
      let HTML_Height = canvas.height;
      let top_left_margin = 15;
      let PDF_Width = HTML_Width + (top_left_margin * 2);
      let PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
      let canvas_image_width = HTML_Width;
      let canvas_image_height = HTML_Height;

      let totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

      let imgData = canvas.toDataURL("image/jpeg", 1.0);
      let pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
      pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);

      for (let i = 1; i <= totalPDFPages; i++) {
        pdf.addPage([PDF_Width, PDF_Height]);
        let margin = -(PDF_Height * i) + (top_left_margin * 4);
        if (i > 1) {
          margin = margin + i * 8;
        }
        console.log(top_left_margin);
        console.log(top_left_margin);
        console.log(-(PDF_Height * i) + (top_left_margin * 4));
        pdf.addImage(imgData, 'JPG', top_left_margin, margin, canvas_image_width, canvas_image_height);

      }

      let filename = '[CHARGEN] ' + this.characterService.character.name + '.pdf';
      pdf.save(filename);
    });
  }
}
