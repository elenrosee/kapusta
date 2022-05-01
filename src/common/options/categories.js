import transport from 'images/categoriesImg/transport.svg';
import alcohol from 'images/categoriesImg/alcohol.svg';
import book from 'images/categoriesImg/book.svg';
import entertainment from 'images/categoriesImg/entertainment.svg';
import health from 'images/categoriesImg/health.svg';
import hobby from 'images/categoriesImg/hobby.svg';
import home from 'images/categoriesImg/home.svg';
import income from 'images/categoriesImg/income.svg';
import products from 'images/categoriesImg/products.svg';
import salary from 'images/categoriesImg/salary.svg';
import tools from 'images/categoriesImg/tools.svg';
import ufo from 'images/categoriesImg/ufo.svg';
import invoice from 'images/categoriesImg/invoice.svg';

export const CATEGORIES = [
  {
    img: transport,
    value: 'Транспорт',
    type: 'costs',
  },
  {
    img: products,
    value: 'Продукты',
    type: 'costs',
  },
  {
    img: health,
    value: 'Здоровье',
    type: 'costs',
  },
  {
    img: alcohol,
    value: 'Алкоголь',
    type: 'costs',
  },
  {
    img: entertainment,
    value: 'Развлечения',
    type: 'costs',
  },
  {
    img: home,
    value: 'Всё для дома',
    type: 'costs',
  },
  {
    img: tools,
    value: 'Техника',
    type: 'costs',
  },
  {
    img: invoice,
    value: 'Коммуналка, связь',
    type: 'costs',
  },
  {
    img: hobby,
    value: 'Спорт, хобби',
    type: 'costs',
  },
  {
    img: book,
    value: 'Образование',
    type: 'costs',
  },
  {
    img: ufo,
    value: 'Прочее',
    type: 'costs',
  },
  {
    nameImg: salary,
    value: 'ЗП',
    type: 'income',
  },
  {
    nameImg: income,
    value: 'Доп. доход',
    type: 'income',
  },
];
