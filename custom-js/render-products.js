const container = document.querySelector('.container .row');

fetch('products.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(product => {
      const colDiv = document.createElement('div');
      colDiv.classList.add('col-lg-3', 'col-md-6', 'col-12', 'text-center', 'mb-3');

      const cardDiv = document.createElement('div');
      cardDiv.classList.add('card', 'border-1', 'border-custom', 'primary-background', 'mb-2', 'p-3');

      const img = document.createElement('img');
      img.classList.add('img-fluid');
      img.src = product.image;
      img.alt = 'Product Image';

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const nameHeading = document.createElement('h6');
      nameHeading.textContent = product.name;

      const pricePara = document.createElement('p');
      pricePara.textContent = product.price;

      const addToCartBtn = document.createElement('a');
      addToCartBtn.classList.add('btn', 'custom-btn', 'text-white', 'mt-2', 'addtocart');
      addToCartBtn.textContent = 'Add to Cart';
  
      addToCartBtn.addEventListener('click', () => {
          let total = localStorage.getItem('checkout') || 0;
          total = parseInt(total) + 1;
          localStorage.setItem('checkout', total);
          document.querySelector('#checkout').innerHTML = total;
      });

      cardBody.appendChild(nameHeading);
      cardBody.appendChild(pricePara);
      cardBody.appendChild(addToCartBtn);
      cardDiv.appendChild(img);
      cardDiv.appendChild(cardBody);
      colDiv.appendChild(cardDiv);

      container.appendChild(colDiv);
    });
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });
