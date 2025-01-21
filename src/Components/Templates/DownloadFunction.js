
import html2pdf from "html2pdf.js";

export const PdfDownload = (id, filename) => {
    return new Promise((resolve, reject) => {
        const element = document.getElementById(id);
        const options = {
            filename: filename,
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 4 },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        };

        html2pdf().from(element).set(options).save().then(() => {
            resolve({message:'Download',id});
        }).catch((error) => {
            console.error("Download error:", error);
            reject("Error downloading file.");
        });
    });
};


