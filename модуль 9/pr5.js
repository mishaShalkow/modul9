function loaded () {

const input1 = document.querySelector('.inp1').value;
const input2 = document.querySelector('.inp2').value;

    if (input1 >= 1 && input1 <= 10) {
        fetch(` https://picsum.photos/v2/list?page=1&limit=10`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            writeOutput(formatOutput(data))
        })
    }else if (input1 === ''){
        btnNode.addEventListener('click', loaded.preventDefault);
    }else {
        let divtag = document.createElement("div");
        divtag.style.color = 'red';
        divtag.innerHTML = "Номер страницы вне диапазона от 1 до 10"
        document.querySelector('.output').appendChild(divtag);
    }

    if (input2 >=1 && input2 <= 10) {
        console.log('lets go')
    }else if (input2 === ''){
        btnNode.addEventListener('click', loaded.preventDefault);
    }else {
        let divtag2 = document.createElement("div");
        divtag2.style.color = 'red';
        divtag2.innerHTML = "Лимит вне диапазона от 1 до 10"
        document.querySelector('.output2').appendChild(divtag2);
    }

    if (input1.value !== true && input2.value !== true) {
        let divtag3 = document.createElement("div");
        divtag3.style.color = 'red';
        divtag3.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10"
        document.querySelector('.output3').appendChild(divtag3);
    }

    function formatOutput(data) {
        let output4 = `
          <p>"${data.download_url}"</p>
          <p>${data.author}</p>
          <img src=" https://picsum.photos/v2/list?page=${input1}&limit=${input2}.png">
        `
        return output4;
      }
      const output4 = document.querySelector('.output4')
      function writeOutput(message) {
        output4.innerHTML = message;
      }

    localStorage.setItem('myKey', message);
    let myLoc = localStorage.getItem('myKey');
    console.log(myLoc)
}


// с localStorage пока не разобрался до конца и с выводом фото в див не получается



