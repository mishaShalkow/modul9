const parser = new DOMParser();
const xmlString= `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`

const xmlDOM = parser.parseFromString(xmlString, 'text/xml');
const listNode = xmlDOM.querySelector('list');
const student = xmlDOM.querySelector('student');
const first = first.querySelector.textContent('first');
console.log('name', name)
