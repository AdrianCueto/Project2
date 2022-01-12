

var productList = [
    {
        id: 1,
        name: "ATM PLACEMENT",
        src: 'assets/img/ATM-PLACEMENT-300x300.png',
    },
    {
        id: 2,
        name: "ATM MANAGEMENT",
        src: 'assets/img/ATM-MANAGEMENT-300x300.png',
    },
    {
        id: 3,
        name: "ATM SUPPORT",
        src: 'assets/img/ATM-SUPPORT-300x300.png',
    },
    {
        id: 4,
        name: "ATM CARD SWIPE",
        src: 'assets/img/BLU-VYNE-SWIPE-300x300.png',
    },
    {
        id: 5,
        name: "ATM BRANDING",
        src: 'assets/img/BRANDING-300x300.png',
    },
    {
        id: 6,
        name: "CASH HANDLING",
        src: 'assets/img/CASH-VAULT-AND-ARMORED-TRUCK-300x300.png',
    },
    {
        id: 7,
        name: "ATM PROCESSING",
        src: 'assets/img/PROCESSING-300x300.png',
    },
    {
        id: 8,
        name: "REMOTE MONITORING",
        src: 'assets/img/REMOTE-MONITORING-DIAGNOSTIC-300x300.png',
    },
    {
        id: 9,
        name: "ATM SMART SAFE",
        src: 'assets/img/BluVyne-Smart-Safe-300x300.png',
    }

]

// EOS PRODUCT TEMPLATE
var productTemplate = function (product) {
    return `
    <div class="col-md-4">
      <div class="EOS-PRODUCT">
      <div>
        <img src="${product.src}" alt="">
      </div>
        <a href="/products/${product.id}" class="btn btn-primary btn-sm">${product.name}</a>
      </div>
    </div>
    `
};
var productString = [];
var productContainer = document.getElementById('EOS-Product-Catlog')
productList.forEach(function (product) {
    productString.push(productTemplate(product));
})
productContainer.innerHTML = productString.join('');


// ~FORM VALIDATION~
//after every keystroke on both #nm and #em check the following to see if the form is ready:
//1. nm must contain 2 characters min
//2. email must contain an @
//3. email must contain a "."
//4. email must have 1 character between @ and '.'
//5. email must have 1 character after '.'
//if all parameters are met, update text in #formstatus to 'form ready to submit'.
function validateform() {
    let n = $('#nm').val();
    let e = $('#em').val();

    let ntest = false;
    let etest1 = false;
    let etest2 = false;
    let etest3 = false;
    let etest4 = false;

    console.log(n, e);
    //test that #nm has more than 1 char
    if (n.length >= 2) {
        ntest = true;
        console.log('name length is:' + n.length, ntest);
    };

    //test that email contains @
    if (e.indexOf('@') > -1 && e.indexOf('.') > -1) {
        etest1 = true;
        etest2 = true;
        console.log('@:' + e.indexOf('@'), etest1);
        console.log('.:' + e.indexOf('.'), etest2);
    };

    if (e.indexOf('.') > e.indexOf('@') + 1) {
        etest3 = true;
        console.log('. in correct spot:' + etest3);
    }

    if (e.indexOf('.') < e.length - 1) {
        etest4 = true;
        console.log('. is not the last char');
    };

    if (ntest && etest1 && etest2 && etest3 && etest4) {
        $('#formstatus').html('Requirements met please submit contact form');
    } else {
        $('#formstatus').html('Contact Requirements not met...');
    }



};

$('#nm, #em').keyup(function () {
    validateform();
    let n = $('#nm').val();
    $('#nmval').html(n);

    let e = $('#em').val();
    $('#emval').html(e);
});

