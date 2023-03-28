const inputPrice = document.querySelector('.price');
const inputCoupon= document.querySelector('.coupon');
const btn = document.querySelector('.calculate');
const result = document.querySelector('.result');

btn.addEventListener('click', calculateDiscount);

const couponList = [];
couponList.push({
  name: 'Coupon1',
  discount: 30,
});
couponList.push({
  name: 'Coupon2',
  discount: 5,
});
couponList.push({
  name: 'Coupon3',
  discount: 15,
});
couponList.push({
  name: 'Dubilubadupdup',
  discount: 10,
});
couponList.push({
  name: 'WHATGOINGON',
  discount: 20,
});
couponList.push({
  name: 'lupe',
  discount: 25,
});

function calculateDiscount() {
  let discount;
  const price = inputPrice.value;
  const coupon = inputCoupon.value;

  function useCoupon(couponElement) {
    return couponElement.name == coupon;
  }

  const couponOnList = couponList.find(useCoupon);

  if (!price || !coupon) {
    result.innerHTML = 'Please complete the required information';
  }
  else {
    if (couponOnList) {
      discount = couponOnList.discount;
      let newPrice = (price * (100 - discount)) / 100;
      result.innerHTML = 'The new price with your coupon is $' + newPrice;
    }
    else {
      result.innerHTML = 'Your coupon is invalid, sorry';
    }
  }

  // else {
  //   switch (coupon) {
  //     case 'COUPON1':
  //       discount = 20;
  //       break;
  //     case 'COUPON2':
  //       discount = 10;
  //       break;
  //     case 'COUPON3':
  //       discount = 30;
  //       break;
      
  //     default:
  //       result.innerHTML = 'Your coupon is invalid, sorry'
  //       return;
  //   }
  //   let newPrice = (price * (100 - discount)) / 100;
  //   result.innerHTML = 'The new price with your coupon is $' + newPrice;
  // }
}