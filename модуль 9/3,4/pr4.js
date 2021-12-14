function getNum () {
    const value1 = document.querySelector('.inp_1').value;
    const value2 = document.querySelector('.inp_2').value;
    const value3 = document.getElementById('#result');
    if (value1 >= 100 && value1 <= 300 && value2 >= 100 && value2 <=300){
        fetch(`https://picsum.photos/200/300`)
        .then(respone => {
            return response.json()
        })
        .then((data) => {
            writeOutput(Output(data));
        })

        function Output(data) {
            let value3 = `
            <p ${data}></p>
            <img src = "https://picsum.photos/${value1}/${value2}"`
            return value3;
        }

        function writeOutput (message){
            value3.innerHTML = message;
        }

    }else {
        console.log("числа вне диапазона")
}
}

  // Вешаем обработчик на кнопку для запроса
  //btnNode.addEventListener('click', () => {
    //useRequest('https://picsum.photos/v2/list/?limit=5', displayResult);
  //})

//`https://picsum.photos/v2/list?page=${value1}&limit=${value2}`


// https://picsum.photos/${value1}/${value2}')