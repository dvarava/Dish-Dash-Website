fetch('https://raw.githubusercontent.com/dvarava/Dish-Dash-Website/main/products.json?token=GHSAT0AAAAAACLQU6KSUZU43U76IWC42ZN4ZLYQBSA')
  .then(response => response.json())
  .then(data => {
    const carouselInner = document.querySelector('.carousel-inner');
    let isFirst = true;

    data.forEach((product) => {
      const carouselItem = document.createElement('div');
      carouselItem.classList.add('carousel-item');

      if (isFirst) {
        carouselItem.classList.add('active');
        isFirst = false;
      }

      const productHtml = `
        <div class="row">
          <div class="col-lg-3 col-md-6 col-6 text-center">
            <div class="card border-0 bg-light mb-2">
              <div class="card-body">
                <img src="${product.image}" class="img-fluid" alt="${product.name}" />
              </div>
              <h6>${product.name}</h6>
              <p>${product.price}</p>
            </div>
          </div>
        </div>
      `;
      carouselItem.innerHTML = productHtml;
      carouselInner.appendChild(carouselItem);
    });
  })
  .catch(error => console.error('Error fetching products:', error));
