// программа для анализа объектов в HAMSTER KOMBAT (telegram, may, 2024)

let count = prompt('Введите количество объектов')

let row = document.querySelector('.main .center .row')

// создание объектов

for (let i = 0; i < count; i++)
{
  let newItem = document.createElement('div')
  newItem.classList = 'item'
  let newItemCenter = document.createElement('div')
  newItemCenter.classList = 'item-center'
  let newName = document.createElement('div')
  newName.classList = 'name'
  let newProfit = document.createElement('div')
  newProfit.classList = 'profit'
  let newPrice = document.createElement('div')
  newPrice.classList = 'price'
  newItemCenter.append(newName)
  newItemCenter.append(newProfit)
  newItemCenter.append(newPrice)
  newItem.append(newItemCenter)
  row.append(newItem)
}

// в переменную elem заносятся все объекты

let elems = document.querySelectorAll('.row .item .item-center')

// заполнение объектов контентом

for (let i = 0; i < elems.length; i++)
{
  let info = prompt('Введите данные об объекте ' + (i + 1) + ' через пробел:  доход__цена')
  let chars = info.split(' ')
  elems[i].children[0].textContent = i + 1
  elems[i].children[1].textContent = chars[0]
  elems[i].children[2].textContent = chars[1]
}

// поиск минимального коэффициента

function coef_min ()
{
  let min = Number(elems[0].children[2].textContent) / Number(elems[0].children[1].textContent)
  let x = 0
  for (let i = 0; i < elems.length; i++)
  {
    if (elems[i].parentElement.style.backgroundColor != 'red')
    {
      if ((Number(elems[i].children[2].textContent) / Number(elems[i].children[1].textContent)) < min)
      {
        min = Number(elems[i].children[2].textContent) / Number(elems[i].children[1].textContent)
        x = i
      }
    }
  }
  if (elems[x].parentElement.style.backgroundColor != 'red') {
    elems[x].parentElement.style.backgroundColor = 'rgb(0, 255, 0)'
    console.log('Минимальный коэффициент: ' + min + ', позиция: ' + (x + 1))
  } else {
    console.log('Ошибка!')
  }
}

// поиск максимального коэффициента

function coef_max ()
{
  let max = Number(elems[0].children[2].textContent) / Number(elems[0].children[1].textContent)
  let x = 0
  for (let i = 0; i < elems.length; i++)
  {
    if (elems[i].parentElement.style.backgroundColor != 'red')
    {
      if ((Number(elems[i].children[2].textContent) / Number(elems[i].children[1].textContent)) > max)
      {
        max = Number(elems[i].children[2].textContent) / Number(elems[i].children[1].textContent)
        x = i
      }
    }
  }
  if (elems[x].parentElement.style.backgroundColor != 'red') {
    console.log('Максимальный коэффициент: ' + max + ', позиция: ' + (x + 1))
  } else {
    console.log('Ошибка!')
  }
}

// поиск минимальной цены товара

function price_min ()
{
  let min_price = Number(elems[0].children[2].textContent)
  let x = 0
  for (let i = 0; i < elems.length; i++)
  {
    if (elems[i].parentElement.style.backgroundColor != 'red')
    {
      if (Number(elems[i].children[2].textContent) < min_price)
      {
        min_price = Number(elems[i].children[2].textContent)
        x = i
      }
    }
  }
  if (elems[x].parentElement.style.backgroundColor != 'red') {
    console.log('Самый дешевый товар стоит ' + min_price + ', позиция: ' + (x + 1))
  } else {
    console.log('Ошибка!')
  }
}

// поиск максимальной цены товара

function price_max ()
{
  let max_price = Number(elems[0].children[2].textContent)
  let x = 0
  for (let i = 0; i < elems.length; i++)
  {
    if (elems[i].parentElement.style.backgroundColor != 'red')
    {
      if (Number(elems[i].children[2].textContent) > max_price)
      {
        max_price = Number(elems[i].children[2].textContent)
        x = i
      }
    }
  }
  if (elems[x].parentElement.style.backgroundColor != 'red') {
    console.log('Самый дорогой товар стоит ' + max_price + ', позиция: ' + (x + 1))
  } else {
    console.log('Ошибка!')
  }
}

// поиск минимальной прибыли

function profit_min ()
{
  let min_profit = Number(elems[0].children[1].textContent)
  let x = 0
  for (let i = 0; i < elems.length; i++)
  {
    if (elems[i].parentElement.style.backgroundColor != 'red')
    {
      if (Number(elems[i].children[1].textContent) < min_profit)
      {
        min_profit = Number(elems[i].children[1].textContent)
        x = i
      }
    }
  }
  if (elems[x].parentElement.style.backgroundColor != 'red') {
    console.log('Самая низкая прибыль ' + min_profit + ', позиция: ' + (x + 1))
  } else {
    console.log('Ошибка!')
  }
}

// поиск максимальной прибыли

function profit_max ()
{
  let max_profit = Number(elems[0].children[1].textContent)
  let x = 0
  for (let i = 0; i < elems.length; i++)
  {
    if (elems[i].parentElement.style.backgroundColor != 'red')
    {
      if (Number(elems[i].children[1].textContent) > max_profit)
      {
        max_profit = Number(elems[i].children[1].textContent)
        x = i
      }
    }
  }
  if (elems[x].parentElement.style.backgroundColor != 'red') {
      console.log('Самая высокая прибыль ' + max_profit + ', позиция: ' + x + 1)
  } else {
    console.log('Ошибка!')
  }
}

// функция запуска анализа

function start ()
{
  console.log('Результаты анализа: ')
  coef_max()
  coef_min()
  price_max()
  price_min()
  profit_max()
  profit_min()
}

// очистка стилей объектов

function clear ()
{
  for (let i = 0; i < elems.length; i++)
  {
    elems[i].parentElement.style.backgroundColor = 'darkgrey'
  }
  return ('Готово!')
}

// функция изменения информации объектов

function edit (x, profit, price)
{
  elems[x - 1].children[1].textContent = profit
  elems[x - 1].children[2].textContent = price
  return ('Информация об объекте ' + x + ' изменена успешно!')
}

// операция блокировки объектов

let objects = document.querySelectorAll('.row .item')

// функция добавления новых элементов

function add (x, profit, price)
{
  let newItem = document.createElement('div')
  newItem.classList = 'item'
  let newItemCenter = document.createElement('div')
  newItemCenter.classList = 'item-center'
  let newName = document.createElement('div')
  newName.classList = 'name'
  newName.textContent = x
  let newProfit = document.createElement('div')
  newProfit.classList = 'profit'
  newProfit.textContent = profit
  let newPrice = document.createElement('div')
  newPrice.classList = 'price'
  newPrice.textContent = price
  newItemCenter.append(newName)
  newItemCenter.append(newProfit)
  newItemCenter.append(newPrice)
  newItem.append(newItemCenter)
  row.append(newItem)
  // обновление переменной elem для корректной работы
  elems = document.querySelectorAll('.row .item .item-center')
  objects = document.querySelectorAll('.row .item')
}

// загрузка сохраненного массива

function load ()
{
  for (let i = 0; i < arr.length; i++)
  {
    let newName = document.createElement('div')
    newName.classList = 'name'
    newName.textContent = arr[i][0]
    let newProfit = document.createElement('div')
    newProfit.classList = 'profit'
    newProfit.textContent = arr[i][1]
    let newPrice = document.createElement('div')
    newPrice.classList = 'price'
    newPrice.textContent = arr[i][2]
    let newItemCenter = document.createElement('div')
    newItemCenter.classList = 'item-center'
    let newItem = document.createElement('div')
    newItem.classList = 'item'
    newItemCenter.append(newName)
    newItemCenter.append(newProfit)
    newItemCenter.append(newPrice)
    newItem.append(newItemCenter)
    row.append(newItem)
    elems = document.querySelectorAll('.row .item .item-center')
    objects = document.querySelectorAll('.row .item')
  }
  objects.forEach(object => {
  object.addEventListener('click', function handleClick(event) {
    if (object.style.backgroundColor != 'rgb(0, 255, 0)') {
      if (object.style.backgroundColor != 'red') {
        object.setAttribute('style', 'background-color: red;');
      } else {
        object.setAttribute('style', 'background-color: darkgrey;');
      }
    } else {
      object.setAttribute('style', 'background-color: darkgrey;');
    }
    elems = document.querySelectorAll('.row .item .item-center')
    objects = document.querySelectorAll('.row .item')
    });
  });
}

// продолжение

objects.forEach(object => {
object.addEventListener('click', function handleClick(event) {
  if (object.style.backgroundColor != 'rgb(0, 255, 0)') {
    if (object.style.backgroundColor != 'red') {
      object.setAttribute('style', 'background-color: red;');
    } else {
      object.setAttribute('style', 'background-color: darkgrey;');
    }
  } else {
    object.setAttribute('style', 'background-color: darkgrey;');
  }
  elems = document.querySelectorAll('.row .item .item-center')
  objects = document.querySelectorAll('.row .item')
  });
});

// сохранение массива в файле data.js
