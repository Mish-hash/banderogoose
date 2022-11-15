import bunkerIcon from '../components/img/targets/bunkerIcon.webp';
import chrikIcon from '../components/img/targets/chrikIcon.webp';
import mackwaIcon from '../components/img/targets/mackwaIcon.webp';
import rublIcon from '../components/img/targets/rublIcon.webp';

import warBunker from '../components/img/war/bunker_war.webp';
import warChrik from '../components/img/war/chrik_war.webp';
import warMackwa from '../components/img/war/mackwa_war.webp';
import warRubl from '../components/img/war/rubl_war.webp';

export const targetsData = {
    welcomeDialogs: [
        'Усі системи мегаактивовані. Очікую на команду!',
        'Готовий фарширувати!',
        'У запасі є ракети – з орків смажити котлети',
    ],
    selectTarget: {
        headerText: 'Оберіть одну з чотирьох позицій',
        descriptionText: 'Гусак атакує обрану позицію зброєю високоточного влучання',
        button: 'Запустити гуся',
    },
    targetResult: {
        headerText: 'Слава Україні',
        descriptionText: 'Ваш гусак успішно запущений',
        button: 'Переглянути карту',
        text: 'Очікуйте гучного «свєрх-тратата» по позиції найближчим часом',
    },
    targets: [
        {
            id: 1,
            name: 'moscov',
            text: 'На мацкву',
            icon: mackwaIcon,
            imgWar: warMackwa,
        },
        {
            id: 2,
            name: 'bunker',
            text: 'На бункер',
            icon: bunkerIcon,
            imgWar: warBunker,
        },
        {
            id: 3,
            name: 'lukashenko',
            text: 'На чик-чирика',
            icon: chrikIcon,
            imgWar: warChrik,
        },
        {
            id: 4,
            name: 'rur',
            text: 'На курс рубля',
            icon: rublIcon,
            imgWar: warRubl,
        },
    ],
    pages: {
        startPage: 'startPage',
        selectTargetPage: 'selectTargetPage',
        targetResult: 'targetResult',
    },
};
