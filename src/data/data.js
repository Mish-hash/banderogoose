import bunkerIcon from '../components/img/targets/bunkerIcon.webp';
import chrikIcon from '../components/img/targets/chrikIcon.webp';
import mackwaIcon from '../components/img/targets/mackwaIcon.webp';
import rublIcon from '../components/img/targets/rublIcon.webp';

export const welcomeDialogTexts = [
    'Усі системи мегаактивовані. Очікую на команду!',
    'Готовий фарширувати!',
    'У запасі є ракети – з орків смажити котлети',
];

export const selectTargetData = {
    headerText: 'Оберіть одну з чотирьох позицій',
    descriptionText: 'Гусак атакує обрану позицію зброєю високоточного влучання',
    targets: [
        {
            id: 1,
            name: 'moscov',
            text: 'На мацкву',
            img: mackwaIcon,
        },
        {
            id: 2,
            name: 'bunker',
            text: 'На бункер',
            img: bunkerIcon,
        },
        {
            id: 3,
            name: 'lukashenko',
            text: 'На чик-чирика',
            img: chrikIcon,
        },
        {
            id: 4,
            name: 'rur',
            text: 'На курс рубля',
            img: rublIcon,
        },
    ],
    button: 'Запустити гуся',
};

export const pages = {
    startPage: 'startPage',
    targetPage: 'targetPage',
}
