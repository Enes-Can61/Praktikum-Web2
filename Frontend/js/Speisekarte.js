/* Detailansicht */
var selectedAmount = 1;

// ProduktID aus dem queryString filtern
let selectedProduct;
try {
    selectedProduct = parseInt(queryString.slice(-1));
} catch (ex) {
    console.error('Error parsing querystring:' + ex);
}

// Produkt von API abrufen
fetch(baseApiUrl + 'wba2api/produkt/gib/1') 
    .then((response) => {
        response.json().then((data) => {
            if (data.fehler) console.error('Error in backend: ' + data.nachricht);
            else {
                const product = data.daten;
                addProductToPage(product);
            }
        });
    })
    .catch((err) => {
        console.log('Error while fetching products: ' + err);
    });
    
    fetch(baseApiUrl + 'wba2api/produkt/gib/2') 
    .then((response) => {
        response.json().then((data) => {
            if (data.fehler) console.error('Error in backend: ' + data.nachricht);
            else {
                const product = data.daten;
                addProductToPage(product);
            }
        });
    })
    .catch((err) => {
        console.log('Error while fetching products: ' + err);
    });

    fetch(baseApiUrl + 'wba2api/produkt/gib/3') 
    .then((response) => {
        response.json().then((data) => {
            if (data.fehler) console.error('Error in backend: ' + data.nachricht);
            else {
                const product = data.daten;
                addProductToPage(product);
            }
        });
    })
    .catch((err) => {
        console.log('Error while fetching products: ' + err);
    });

    fetch(baseApiUrl + 'wba2api/produkt/gib/4') 
    .then((response) => {
        response.json().then((data) => {
            if (data.fehler) console.error('Error in backend: ' + data.nachricht);
            else {
                const product = data.daten;
                addProductToPage(product);
            }
        });
    })
    .catch((err) => {
        console.log('Error while fetching products: ' + err);
    });

    fetch(baseApiUrl + 'wba2api/produkt/gib/5') 
    .then((response) => {
        response.json().then((data) => {
            if (data.fehler) console.error('Error in backend: ' + data.nachricht);
            else {
                const product = data.daten;
                addProductToPage(product);
            }
        });
    })
    .catch((err) => {
        console.log('Error while fetching products: ' + err);
    });

    fetch(baseApiUrl + 'wba2api/produkt/gib/6') 
    .then((response) => {
        response.json().then((data) => {
            if (data.fehler) console.error('Error in backend: ' + data.nachricht);
            else {
                const product = data.daten;
                addProductToPage(product);
            }
        });
    })
    .catch((err) => {
        console.log('Error while fetching products: ' + err);
    });

    fetch(baseApiUrl + 'wba2api/produkt/gib/7') 
    .then((response) => {
        response.json().then((data) => {
            if (data.fehler) console.error('Error in backend: ' + data.nachricht);
            else {
                const product = data.daten;
                addProductToPage(product);
            }
        });
    })
    .catch((err) => {
        console.log('Error while fetching products: ' + err);
    });

    fetch(baseApiUrl + 'wba2api/produkt/gib/8') 
    .then((response) => {
        response.json().then((data) => {
            if (data.fehler) console.error('Error in backend: ' + data.nachricht);
            else {
                const product = data.daten;
                addProductToPage(product);
            }
        });
    })
    .catch((err) => {
        console.log('Error while fetching products: ' + err);
    });

    fetch(baseApiUrl + 'wba2api/produkt/gib/9') 
    .then((response) => {
        response.json().then((data) => {
            if (data.fehler) console.error('Error in backend: ' + data.nachricht);
            else {
                const product = data.daten;
                addProductToPage(product);
            }
        });
    })
    .catch((err) => {
        console.log('Error while fetching products: ' + err);
    });

    fetch(baseApiUrl + 'wba2api/produkt/gib/10') 
    .then((response) => {
        response.json().then((data) => {
            if (data.fehler) console.error('Error in backend: ' + data.nachricht);
            else {
                const product = data.daten;
                addProductToPage(product);
            }
        });
    })
    .catch((err) => {
        console.log('Error while fetching products: ' + err);
    });

    fetch(baseApiUrl + 'wba2api/produkt/gib/11') 
    .then((response) => {
        response.json().then((data) => {
            if (data.fehler) console.error('Error in backend: ' + data.nachricht);
            else {
                const product = data.daten;
                addProductToPage(product);
            }
        });
    })
    .catch((err) => {
        console.log('Error while fetching products: ' + err);
    });

    fetch(baseApiUrl + 'wba2api/produkt/gib/12') 
    .then((response) => {
        response.json().then((data) => {
            if (data.fehler) console.error('Error in backend: ' + data.nachricht);
            else {
                const product = data.daten;
                addProductToPage(product);
            }
        });
    })
    .catch((err) => {
        console.log('Error while fetching products: ' + err);
    });

    fetch(baseApiUrl + 'wba2api/produkt/gib/13') 
    .then((response) => {
        response.json().then((data) => {
            if (data.fehler) console.error('Error in backend: ' + data.nachricht);
            else {
                const product = data.daten;
                addProductToPage(product);
            }
        });
    })
    .catch((err) => {
        console.log('Error while fetching products: ' + err);
    });

    fetch(baseApiUrl + 'wba2api/produkt/gib/14') 
    .then((response) => {
        response.json().then((data) => {
            if (data.fehler) console.error('Error in backend: ' + data.nachricht);
            else {
                const product = data.daten;
                addProductToPage(product);
            }
        });
    })
    .catch((err) => {
        console.log('Error while fetching products: ' + err);
    });

    fetch(baseApiUrl + 'wba2api/produkt/gib/15') 
    .then((response) => {
        response.json().then((data) => {
            if (data.fehler) console.error('Error in backend: ' + data.nachricht);
            else {
                const product = data.daten;
                addProductToPage(product);
            }
        });
    })
    .catch((err) => {
        console.log('Error while fetching products: ' + err);
    });

    fetch(baseApiUrl + 'wba2api/produkt/gib/16') 
    .then((response) => {
        response.json().then((data) => {
            if (data.fehler) console.error('Error in backend: ' + data.nachricht);
            else {
                const product = data.daten;
                addProductToPage(product);
            }
        });
    })
    .catch((err) => {
        console.log('Error while fetching products: ' + err);
    });

    fetch(baseApiUrl + 'wba2api/produkt/gib/17') 
    .then((response) => {
        response.json().then((data) => {
            if (data.fehler) console.error('Error in backend: ' + data.nachricht);
            else {
                const product = data.daten;
                addProductToPage(product);
            }
        });
    })
    .catch((err) => {
        console.log('Error while fetching products: ' + err);
    });

    fetch(baseApiUrl + 'wba2api/produkt/gib/18') 
    .then((response) => {
        response.json().then((data) => {
            if (data.fehler) console.error('Error in backend: ' + data.nachricht);
            else {
                const product = data.daten;
                addProductToPage(product);
            }
        });
    })
    .catch((err) => {
        console.log('Error while fetching products: ' + err);
    });

    fetch(baseApiUrl + 'wba2api/produkt/gib/19') 
    .then((response) => {
        response.json().then((data) => {
            if (data.fehler) console.error('Error in backend: ' + data.nachricht);
            else {
                const product = data.daten;
                addProductToPage(product);
            }
        });
    })
    .catch((err) => {
        console.log('Error while fetching products: ' + err);
    });

    fetch(baseApiUrl + 'wba2api/produkt/gib/20') 
    .then((response) => {
        response.json().then((data) => {
            if (data.fehler) console.error('Error in backend: ' + data.nachricht);
            else {
                const product = data.daten;
                addProductToPage(product);
            }
        });
    })
    .catch((err) => {
        console.log('Error while fetching products: ' + err);
    });
    product.id.sort();

function addProductToPage(product) {
    const htmlTemplate = `
    <div class="box">
    <div class="imgBx">
    </div>
            <table class="table table-hover">
                <div class="content">
                    <div id="notification"></div>
                </div>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Bild</th>
                        <th>Artikel</th>
                        <th>Zutaten</th>
                        <th>Preis</th>
                        <th>Hinzufügen</th>
                    </tr>
                </thead>
                <tbody id="product-container"> 
                    <tr>
                        <td class="id">${product.id}</td>
                        <td><img src="${product.bilder[0].bildpfad}" class="Bilder"></td>
                        <td class="bez"> ${product.bezeichnung}</td>
                        <td class="zut"> ${product.zutaten}</td>
                        <td class="preis"> ${product.nettopreis.toFixed(2)} €</td>
                        <td><a class="btn btn-primary" href="#" onClick="addProductToCart(${product.id})" role="button">In den Warenkorb</a></td>
                    </tr>
                </tbody>
            </table>
    </div>
            `;
    const productContainer = document.getElementById('product-container');
    productContainer.appendChild(htmlToElement(htmlTemplate));
    addSelectEventHandler();
}

function addSelectEventHandler() {
    let selectElement = document.getElementById('amount-select');
    for (let i = 1; i <= 10; i++) {
        let opt = document.createElement('option'); 
        opt.value = i;
        opt.innerHTML = i;
        selectElement.appendChild(opt);
    }
    selectElement.onchange = (event) => {
        console.log(event);
        selectedAmount = event.target.options[event.target.selectedIndex].value; 
    };
}

// Produkt an den Warenkorb übergeben
function addProductToCart(pid) {
    // Benachrichtigung einblenden -> https://greensock.com/docs/
    gsap.to('#notification', {
        opacity: 1,
        duration: 1.2,
        y: 100,
    });
    setTimeout(() => {
        gsap.to('#notification', {
            opacity: 0,
            duration: 1.2,
            y: -100,
        });
    }, 1300);
    addToCart(pid, parseInt(selectedAmount));
}