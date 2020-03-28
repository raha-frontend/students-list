// ждем окончания загрузки окна браузера
window.addEventListener('load', function () {
  // элемент со страницы куда вставим студентов
  var students = document.querySelector('.students');

  // данные о студентах
  var studentsData = [
    {
      name: 'Гаджимурадов Магомед',
      age: 23,
      faculty: 'биологический'
    },
    {
      name: 'Гаджимурадов Рамазан',
      age: 22,
      faculty: 'биологический'
    },
    {
      name: 'Гаджимурадов Руслан',
      age: 21,
      faculty: 'биологический'
    }
  ];

  // переменная для записи результата цикла
  var result = '';

  // цикл, проходимся по данным студентов
  for (var i = 0; i < studentsData.length; i++) {
    result += `<li>
      <p>Имя студента: ${studentsData[i].name}</p>
      <p>Возраст: ${studentsData[i].age}</p>
      <p>Факультет: ${studentsData[i].faculty});</p>
      <hr>
    </li>`;
  }

  // вставляем на страницу
  students.innerHTML = result;
});
