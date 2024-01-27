let content = '50px';
let padding = '8px';
let border = '4px';
function getElementWidth(content, padding, border) {
  return Number.parseFloat(content + (padding + border) * 2);
}
getElementWidth();
// console.log(getElementWidth('50px', '8px', '4px')); // 74
