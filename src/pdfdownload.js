function downloadFullPage() {
  const element = document.getElementById("pdf-content");

  const opt = {
    margin:       0,
    filename:     'selfcare-results.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'px', format: 'a4', orientation: 'landscape' }
  };

  html2pdf().set(opt).from(element).save();
}
