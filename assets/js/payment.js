
resultBtn.addEventListener('click', hesapla);

function hesapla() {
  let price = Number(totalBill.value);
  let tip = Number(tipBill.value);
  let people = Number(peopleBill.value);
  if( price && people> 0) {
    let resultTip = (price * tip /100) / people;
    personTip.innerHTML = resultTip.toFixed(2);
    let finalResult = (price + (price * (tip / 100))) / people;
    resultBill.innerHTML = finalResult.toFixed(2);
  } else {
    alert('lütfen Geçerli Bir Değer Giriniz');
  }
} 

clearBtn.addEventListener('click', clearResult);

function clearResult () {
  personTip.innerHTML = "";
  resultBill.innerHTML ='';
}
