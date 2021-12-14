function addEv () {
    const value = document.querySelector('.input').value;
    if (value <=10) {
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
            console.log(`Статус: ${xhr.status}; Результат: ${xhr.response}`)
};

xhr.onerror = function() {
    console.log('Ошибка запроса');
};

xhr.open("get", "https://picsum.photos/v2/list?limit=10", true);
xhr.send();
    }else {
        console.log("Число вне диапазона")
    }
}



