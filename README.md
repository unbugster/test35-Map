# Верстка страницы по макету

<image src="/img/maket.png">

## Цель – сверстать веб страницу с интерфейсом схожим с макетом.
### Задачи:
1. В легенде слоев при клике на слой раскрываются заранее определенные типы объектов
(сделать как минимум два раскрывающихся элемента).
Например, при клике на слой «Инвестиционные проекты» пользователи могут выбрать
отображение различных проектов по их статусу (Реализован, Реализуется, Планируется) по
отдельности или всех вместе, используя функциональные кнопки и
(выделение/снятие родительского элемента выбирает/снимает дочерние объекты).
Элементы без чекбокса являются ссылками.
2. При клике на функциональную кнопку «Раскрыть фильтры» (кнопка из набора font
awesome любая, появляется при наведении мыши на имя слоя) напротив слоя
раскрывается дополнительное окно с фильтрами для слоя.

3. Для фильтров со справочной информацией должен быть реализован выпадающий список
(с возможностью поиска). На примере данный способ будет доступен для фильтров
«Муниципальное образование», «Инвестор», «Тип проекта», «Сфера деятельности».
Для фильтров «Год начала реализации проекта» и «Год окончания реализации проекта»
необходимо предусмотреть ввод четырехзначного целого числа. Для фильтров «Объем
инвестиций» и «Количество рабочих мест» предусмотреть возможность ввода целых
чисел в диапазоне от __ до __ (проверка чтобы 1 число было меньше 2, а 2 больше 1).
4. Адаптивная, мобильная верстка. Браузеры яндекс, мозила, хром. При разработке
использовать js, jquery (без js фреймворков)
