import bunkerIcon from '../components/img/targets/bunkerIcon.webp';
import chrikIcon from '../components/img/targets/chrikIcon.webp';
import mackwaIcon from '../components/img/targets/mackwaIcon.webp';
import rublIcon from '../components/img/targets/rublIcon.webp';

import warBunker from '../components/img/war/bunker_war.webp';
import warChrik from '../components/img/war/chrik_war.webp';
import warMackwa from '../components/img/war/mackwa_war.webp';
import warRubl from '../components/img/war/rubl_war.webp';


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

export const targetResultData = {
    headerText: 'Слава Україні',
    descriptionText: 'Ваш гусак успішно запущений',
    button: 'Переглянути карту',
    targets: [
        {
            id: 1,
            name: 'moscov',
            img: warMackwa,
        },
        {
            id: 2,
            name: 'bunker',
            img: warBunker,
        },
        {
            id: 3,
            name: 'lukashenko',
            img: warChrik,
        },
        {
            id: 4,
            name: 'rur',
            img: warRubl,
        },
    ],
    text: 'Очікуйте гучного «свєрх-тратата» по позиції найближчим часом',
}

export const pages = {
    startPage: 'startPage',
    selectTargetPage: 'selectTargetPage',
    targetResult: 'targetResult',
}
