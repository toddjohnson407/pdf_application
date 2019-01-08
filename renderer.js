var pdfMake = require('./bower_components/pdfmake/build/pdfmake.js');
var pdfFonts = require('./bower_components/pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;

var createButton = document.getElementById("submit");

var generateDocument = function() {
  var userContent = document.getElementById("content").value;
  var docDefinition = { content: `${userContent}` };

  pdfMake.createPdf(docDefinition).download();
  // pdfMake.createPdf(docDefinition).open();
}

createButton.onclick = function () { generateDocument() };

// var docDefinition = {
//   content: [
//     { text: 'This is a header', style: 'header' },
//     'No styling here, this is a standard paragraph',
//     { text: 'Another text', style: 'anotherStyle' },
//     { text: 'Multiple styles applied', style: [ 'header', 'anotherStyle' ] }
//   ],

//   styles: {
//     header: {
//       fontSize: 22,
//       bold: true
//     },
//     anotherStyle: {
//       italics: true,
//       alignment: 'right'
//     }
//   }
// };
