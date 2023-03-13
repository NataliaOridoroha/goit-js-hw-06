const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const imagesEl = document.querySelector('.gallery');

const elements = images.map(option => {

const titleEl = document.createElement('li');
titleEl.classList.add('image');
titleEl.insertAdjacentHTML('beforeend',
 '<img src=https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 alt="White and Black Long Fur Cat" >',
 );
titleEl.insertAdjacentHTML('beforeend', 
'<img src=https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 alt="Orange and White Koi Fish Near Yellow Koi Fish" >');
titleEl.insertAdjacentHTML('beforeend', 
'<img src=https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 alt="Group of Horses Running" >');
return titleEl;
});
console.log(elements);
imagesEl.appendChild(...elements);




