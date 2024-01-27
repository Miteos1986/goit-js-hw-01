let content = '50px';
let padding = '8px';
let border = '4px';
function getElementWidth(content, padding, border) {
  content = Number.parseFloat(content);
  padding = Number.parseFloat(padding);
  border = Number.parseFloat(border);
  return content + (padding + border) * 2;
  //   return Number.parseFloat(content + (padding + border) * 2);
}
getElementWidth();
console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
