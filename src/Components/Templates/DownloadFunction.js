
import html2pdf from "html2pdf.js";

export const PdfDownload = (id,filename) => {
    
   
        console.log(id,filename);
        
        const element = document.getElementById(id); // Get the specific div by ID
        const options = {
            filename: filename, // Specify the filename for the PDF
            image: { type: "jpeg", quality: 0.98 }, // Image type and quality (if any images are present in the div)
            html2canvas: { scale: 4}, // Set scale for canvas rendering (higher = better quality)
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }, // Set the PDF format
        };
        html2pdf().from(element).set(options).save(); // Generate and download the PDF
    
}