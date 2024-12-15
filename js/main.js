const offers = document.querySelectorAll('.offer');
offers.forEach(offer=>{
    offer.addEventListener('click',function(){
        const value = this.getAttribute('data-value');
        offers.forEach(d => d.classList.remove('offer-selected'));
        this.classList.add('offer-selected');
        handleOfferRadioButton(value);
        handleTable(value);
    })
})

const handleOfferRadioButton = (value) => {
    const radioButtons = document.querySelectorAll('input[name="unit"]');
    radioButtons.forEach(function(radio) {
        if (radio.getAttribute('value') === "unit-"+value) {
          radio.checked = true;
        } else {
          radio.checked = false;
        }
    });
}

const handleTable = (value) => {
    const tables = document.querySelectorAll('.offer-option-table');
    tables.forEach(function(table){
        console.log(`table ${table.getAttribute('data-value')}`)
        if(table.getAttribute('data-value') === "unit-"+value){
            table.style.display = "block"
        }else{
            table.style.display = "none"
        }
    })
}