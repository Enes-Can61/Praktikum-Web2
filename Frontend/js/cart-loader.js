/* Warenkorb befüllen */
let total = 0;
let totalTaxes = 0;

// Warenkorb laden
const cart = getCart();
cart.items.forEach((cartItem) => {
    getItemFromApi(cartItem);
});

function getItemFromApi(cartItem){
  fetch(baseApiUrl + 'wba2api/produkt/gib/' + cartItem.pid)
  .then((response) => {
    response.json().then((json) => {
      if(json.fehler) console.error('Error in Backend ' + data.nachricht);
      else{
        cartItem.data = json.daten;
        addCartItemToView(cartItem);
      }
    });
  })
  .catch((err) => {
    console.log('Error while fetching product: ' + err);
  });
}

function addCartItemToView(cartItem){
  //Preis und Steuern aufaddieren
  total += cartItem.data.nettopreis * cartItem.amount;
  totalTaxes += cartItem.data.mehrwertsteueranteil * cartItem.amount;
  
  const tableRowTemplate = `
    <tr>
      <td><a class="btn btn-primary" href="Warenkorb.html" onClick="removeFromCart(${cartItem.pid})" role="button">Löschen</a></td>
      <td>${cartItem.data.bezeichnung}</td>
      <td>${cartItem.amount}</td>
      <td>${(cartItem.data.nettopreis * cartItem.amount).toFixed(2)} € </td>
    </tr>
  `;
  document.getElementById('row-container').appendChild(htmlToElement(tableRowTemplate));

  fillPriceArea();

  const Gesamtsumme = `
  <tr>
  <td>${(total.toFixed(2))} €</td>
  </tr>
  `;
  document.getElementById('Summe-hinzufügen').appendChild(htmlToElement(Gesamtsumme));

}

function fillPriceArea(){
  const priceTemplate = `
    <table class="endprice">
      <thead>
        <tr>
          <td>ohne MwSt</td>
          <td>${total.toFixed(2)-totalTaxes.toFixed(2)} €</td>
        </tr>
      </thead>

      <tbody>
      <tr>
        <td>MwSt 19%</td>
        <td>${totalTaxes.toFixed(2)} €</td>
      </tr>
      </tbody>
    </table>
  `;

  document.getElementById('price-container').innerHTML = priceTemplate;
}