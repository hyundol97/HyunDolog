export interface Quote {
    id: number;
    original: string;
    korean: string;
    author: string;
}

export const quotes: Quote[] = [
    {
        id: 1,
        original: '子曰 知之者不如好之者 好之者不如樂之者',
        korean: '공자께서 말씀하셨다. 아는 자는 좋아하는 자만 못하고, 좋아하는 자는 즐기는 자만 못하다.',
        author: '공자『논어』中',
    },
    {
        id: 2,
        original: 'Try not to become a man of success but rather to become a man of value.',
        korean: '성공한 사람보다는 가치 있는 사람이 되라.',
        author: '알버트 아인슈타인',
    },
    {
        id: 3,
        original: 'Everyone thinks of changing the world, but no one thinks of changing himself.',
        korean: '모두가 세상을 변화시키려고 생각하지만, 정작 스스로 변하겠다고 생각하는 사람은 없다.',
        author: '레프 톨스토이',
    },
    {
        id: 4,
        original: 'The only way to do great work is to love what you do.',
        korean: '훌륭한 일을 하는 유일한 방법은 당신이 하는 일을 사랑하는 것이다.',
        author: '스티브 잡스',
    },
    {
        id: 5,
        original: "Life is what happens to you while you're busy making other plans.",
        korean: '인생은 당신이 다른 계획을 세우느라 바쁠 때 당신에게 일어나는 일이다.',
        author: '존 레논',
    },
];
