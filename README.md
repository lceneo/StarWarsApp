# StarWarsApp
Приложение представляет собой сервис, отображающий карточки с планетами и предоставляющий детальную информацию о них.
## Содержание

1. <a href = "#start">Как запустить проект?</a>
2. <a href = "#stack">Stack-технологий</a>
3. <a href = "#main_page">Страница со списком планет и фильтрацией<a>
4. <a href = "#info_page">Страница детальной информации с "обитателями" планеты</a>
5. <a href = "#additional">Дополнительный проект</a>

<a name = start></a>
## Как запустить проект?
1-ый способ:
  1. Перейти по ссылке http://cv78484.tw1.ru/ (сайт выложен на хостинг) (Будет снят с хостинга 27.02.2023 из-за окончания бесплатного периода)
  
2-ой способ:
  1. Установить Angular (Открыть терминал и прописать npm install -g @angular/cli)
  2. Скачать проект, открыть его и прописать в терминале npm install
  3. Прописать в терминале npm start

  ((Это случается редко, но иногда SWAPI может лечь и обрабатывать запросы по минуте, в таком случае, советую подождать ~1 час и попробовать ещё раз запустить приложение))

<a name = stack></a>  
## Stack-технологий
- Приложение написано на Angular
- При написании кода использовались SWAPI(docs: https://swapi.dev/documentation)
- Адаптивная вёрстка с использованием принципов БЭМ

<a name = main_page></a>
## Страница со списком планет и фильтрацией

### Список планет
На данной странице выводятся, сформированные благодаря SWAPI карточки планет с частичной информацией про них(вся информация на странице детальной информации). 
<br><br>
![image](https://user-images.githubusercontent.com/94864786/219673296-88c2f306-b27f-4a4a-83e6-7c5e4252568b.png)
<br><br>


### Фильтрация по названию
Присутствует фильтрация планет по их названию.
<br><br>
![image](https://user-images.githubusercontent.com/94864786/219674706-d287394e-ce0d-47f3-81c8-c13c363c4de0.png)
<br><br>

<a name = info_page></a>
## Страница детальной информации

При щелчке по любой карточке из списка происходит редирект на данную страницу.
На ней указана детальная информация про планету, а также список её "обитателей". Щёлкнув по кнопке "Вернуться" происходит редирект на страницу со списком всех карточек.
<br><br>
![image](https://user-images.githubusercontent.com/94864786/219675095-6f00c23b-e829-45e0-a213-bcc8b67959b9.png)
<br><br>


### Список персонажей
На данной странице присутствует список "обитателей" данной планеты с реализованной фильтрацией по полу. Если список пуст, то никто не живёт на данной планете.
<br><br>
![image](https://user-images.githubusercontent.com/94864786/219675631-c4c552b1-a2b4-4566-9068-a943ab5f7865.png)
<br><br>
<a name = additional></a>
## Дополнительный проект
1.Принимал участие в проекте создания Агрегатора репетиторов(аналог Profi.ru) от компании 66bit.
Ссылка на репозиторий: https://github.com/lceneo/tutor-aggregator-main
<br>
2.Недавно делал pet-project на чистом ts. Проект представляет собой генератор случайных компаний с ленивой подзагрузкой данных с возможностью создавать собственные компании. Реализована авторизация, имеется инеграция с API-Яндекс карт и Random Data API.
Ссылка на репозиторий: https://github.com/lceneo/CompaniesApp
