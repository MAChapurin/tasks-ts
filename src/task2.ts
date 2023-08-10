interface TotalPriceInterface {
  price: number
  discount?: number
  isInstallment?: boolean
  months?: number
}


/**
 * Функция, рассчитывающая стоимость с учетом скидки и рассрочки на заданное количество месяцев
 * @param {Object} - Обьект с обязательным свойсвом price - стоимость
 * и опциональными свойствами:
 * discount - скидка, 
 * isInstallment - наличие рассрочки, 
 * month - количество месяцев на рассрочку
 * @returns {number}
 */
const totalPrice = ({ price, discount=0, isInstallment=false, months=1 }:TotalPriceInterface): number => {
  if(isInstallment) {
    return Math.floor((price/months)/100 * (100 - discount))
  }
  return  Math.floor((price)/100 * (100 - discount))
};

const result = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(result)
// 6250
//Я подозреваю что условие задачи поставленно некоректно, данная цифра,
//которая должна вернуть функция больше подходит под размер ежемесячного платежа по рассрочке