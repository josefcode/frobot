let view = document.getElementById('view-button')
let close = document.getElementById('close-button')
let codey = document.getElementById('codey')

let open = () => {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = () => {
  codey.style.display = 'none';
  close.style.display = 'none';
};


view.addEventListener('click', open);
close.addEventListener('click', hide);

let textChange = () => view.innerHTML = 'Hello my friend';
let textReturn = () => view.innerHTML = 'View';


view.addEventListener('click', textChange);
close.addEventListener('click', textReturn);