const container = document.querySelector('.container .row');

fetch('products.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(product => {
      const colDiv = document.createElement('div');
      colDiv.classList.add('col-lg-3', 'col-md-6', 'col-6', 'text-center', 'mb-3');

      const cardDiv = document.createElement('div');
      cardDiv.classList.add('card', 'border-0', 'bg-light', 'mb-2');

      const img = document.createElement('img');
      img.classList.add('img-fluid');
      img.src = product.image;
      img.alt = 'Product Image';

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const pricePara = document.createElement('h6');
      pricePara.textContent = product.price;

      const nameHeading = document.createElement('h5');
      nameHeading.textContent = product.name;

      const addToCartBtn = document.createElement('button');
      addToCartBtn.classList.add('btn', 'custom-btn', 'text-white', 'mt-2');
      addToCartBtn.textContent = 'Add to Cart';

      cardBody.appendChild(pricePara);
      cardBody.appendChild(nameHeading);
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
