# Test assignment for Lesta Games.

**_React SPA-проект получения с удаленного сервера по протоколу GraphQL и отображения в табличном виде списка короблей игры World of Warships с возможностью сортировки по заданным параметрам_**

**_Ссылка на [техническое задание](https://gist.github.com/nonamenix/fc7609de3ebe2642db6324bc962295b2)_**  
Дополнительно ТЗ продублировано в текстовом формате в [директории](https://github.com/KamajorQA/Lesta_Ships/tree/master/src/assets) `src/assets`.

---

### Использован шаблон c-r-a --template typescript

Для первичной инициализации проекта в его директории сперва нужно установить зависимости с помощью команды:

```sh
npm install
```

Для локального запуска проекта нужно использовать команду

```sh
npm start
```

## В проекте настроен CI/CD через GitHub Actions.

![GitHub Actions warships status](https://github.com/KamajorQA/Lesta_Ships/actions/workflows/lesta-ships.yml/badge.svg)

**_Деплой реализован через Netlify._**
**_Ссылка на продакшн стенд: [lesta-ships](https://lesta-ships.netlify.app/)_**

[![Netlify Status](https://api.netlify.com/api/v1/badges/46cde58e-7494-4cbd-8f4e-327ae8cb4902/deploy-status)](https://app.netlify.com/sites/lesta-ships/deploys)

### Автоформатирование и проверка кода реализованы через Prettier и ESLint.

Для запуска линтинга можно использовать команду:

```sh
npm run lint
```

Для запуска автоисправления линтинга можно использовать команду:

```sh
npm run lint:fix
```

## В проекте использованы библиотеки

- [x] React;
- [x] Typescript;
- [x] React Router;
- [x] Ant Design;
- [x] Framer Motion;
- [x] react-icons;
- [x] react-loader-spinner;
- [x] prettier;

### Дополнительные пояснения:

Для общего дизайна использована библиотека UI-компонентов **Ant Design**.  
Для **анимаций** на домашней странице - **Framer Motion**.

React Router использован для навигации между страницами **Home** / **Ships List** / **Contacts** / **Not Found**  
Рендер вложенных страниц реализован через компонент `<Outlet />` библиотеки `react-router-dom`  
Также реализовано управление неавторизованным пользователем через хук `useNavigate`.

Данные для списка кораблей получаются с удаленного сервера по стандарту **GraphQL** из предоставленного [API World of Warships](https://vortex.korabli.su/api/graphql/glossary/).  
_**Важно!**_ Запросы должны выполняться с localhost в качестве origin, ввиду ограничений CORS.  
Соответственно данные в таблице кораблей загрузятся и отобразятся только при локальном запуске проекта, а при просмотре проекта на [`продакшн стенде`](https://lesta-ships.netlify.app/) на странице списка всех кораблей будет отражена ошибка загрузки данных.  
_Данное поведение является нормальным и ожидаемым._

На странице списка кораблей еализована **фильтрация** (поиск) в соответствии с ТЗ по уровню, нации и классу на клиентской стороне.  
**Логика поиска** вынесена в кастомный хук `useSearch`, который фактически дополняет хук `useControlTable`, предоставляя последнему метод сортировки, добавляемый в конкретные столбцы таблицы.  
Поиск может проводиться по требуемым столбцам `Уровень` / `Нация` / `Класс` , а также дополнительно по `Названию`(возможна одновременная фильтрация по условиям во всех четырех столбцах).

Кроме того в главной таблице данных реализована **_сортировка по уровню (силе)_** непосредственно в самом столбце `Уровень` и по отдельной кнопке, а также сброс условия сортировки на отдельной кнопке (логика управления - в вышеуказанном кастомном хуке `useControlTable`).

Также реализована **пагинация** с возможностью выбора количества отображаемых на странице строк таблицы.

![Warships list](./src/assets/img/Warships%20List.jpg)

**Видеофон** для страницы Home реализован через нативный тег `video` в компоненте `VideoBackground` с наложением обычного css-градиента на div-блок/фильтр поверх для размытия границ и плавного перехода.

![Home page design](./src/assets/img/Home%20Page.jpg)

Работа с **SVG** организована и с использованием иконок библиотеки `react-icons`, и с использованием локальных файлов из директории `assets/icons`.

Библиотека **_react-loader-spinner_** - минималистичная библиотека анимированных спиннеров, готовых к использованию с возможностью небольшой кастомизации. Использована в компоненте `Loader`'а.

Настроен адаптивный дизайн для таблицы (весь сайт адаптивен).

---

Любые замечания по работе приложения приветствуются 😊
