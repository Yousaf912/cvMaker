
import html2pdf from "html2pdf.js";


export const PdfDownload = (id, filename) => {


    const element = document.getElementById(id);
    const options = {
        filename: filename,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 4 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    html2pdf().from(element).set(options).save().then(()=>{
        return ("downloaded")
    })
}



