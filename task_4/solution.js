// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    // Аргументом функции является JSON
    let data = JSON.parse(json); 

    let products = data.products;

        // Преобразуйте строку json, переданную как аргумент функции,
    // в объект с помощью функции JSON.parse(json)
       
      // и запишите в переменную data     
    // Верните как результат функции свойство products объекта data
    return products;
}

// Напишите функцию renderProductsCards(json)
function renderProductsCards(json){
    // дальнейшие действия требуется выполнять тут
    clearProducts(json); 
 
// Аргументом функции является JSON
 // Выполните функцию clearProducts - она уже написана в коде, просто вызовите ее, аргументы не требуются
   

// Выполните функцию parseProducts, передав в неё json - аргумент функции и запишите результат в переменную products
     products = parseProducts(json);

// Запишите в переменную length значение свойства products.length
    length = products.length;

// Напишите цикл, в котором перебираете все products от 0 до (length - 1)
let i = 0; for (let i = 0; i < length; i += 1) {
    // место для пункта 7
     addProduct(products[i]);
    }
}
// и выполняете addProduct с каждым элементом массива products (передавая элемент массива как аргумент)
