let codes = document.querySelectorAll('.highlight > a');
let countID = 0;
codes.forEach((code) => {

  code.setAttribute("id", "code" + countID);
  
  let btn = document.createElement('button');
  btn.innerHTML = "Copy";
  btn.className = "btn-copy";
  btn.setAttribute("data-clipboard-action", "copy");
  btn.setAttribute("data-clipboard-target", "#code" + countID);
  // let btn1 = document.createElement('button');
  // btn1.innerHTML = "Open";
  // btn1.className = "btn-copy";
  // btn1.setAttribute("formaction", window.open("#code" + countID));  
  let div = document.createElement('div');
  div.appendChild(btn);
  // div.appendChild(btn1);

  code.before(div);

  countID++;
}); 

let clipboard = new ClipboardJS('.btn-copy');
