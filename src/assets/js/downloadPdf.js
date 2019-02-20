import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default () => {
  html2canvas(document.getElementById('resume')).then(canvas => {
    const pdf = new jsPDF('p', 'mm', 'a4');

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    const maxHeight = (pdfHeight * imgWidth) / pdfWidth;
    const numberPages = Math.ceil(imgHeight / maxHeight);

    for (let i = 0; i < numberPages; i++) {
      const img = getImagePortion(
        canvas,
        imgWidth,
        maxHeight,
        0,
        0 + i * maxHeight
      );

      if (i > 0) {
        pdf.addPage();
      }
      pdf.addImage(img, 'PNG', 0, 0, pdfWidth, pdfHeight);
    }
    pdf.save('FernandoAlegria.pdf');
  });
};

const getImagePortion = (imgObj, newWidth, newHeight, startX, startY) => {
  const tnCanvas = document.createElement('canvas');
  const tnCanvasContext = tnCanvas.getContext('2d');
  tnCanvas.width = newWidth;
  tnCanvas.height = newHeight;

  const bufferCanvas = document.createElement('canvas');
  const bufferContext = bufferCanvas.getContext('2d');
  bufferCanvas.width = imgObj.width;
  bufferCanvas.height = imgObj.height;
  bufferContext.drawImage(imgObj, 0, 0);

  tnCanvasContext.drawImage(
    bufferCanvas,
    startX,
    startY,
    newWidth,
    newHeight,
    0,
    0,
    newWidth,
    newHeight
  );

  return tnCanvas.toDataURL('image/png');
};
