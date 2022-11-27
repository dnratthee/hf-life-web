type Item = {
    name: string;
    slug: string;
    image: string;
};

export const homepage: Item[] = [
    { name: 'แคลอรี่', slug: 'calorie', image: '/images/icon/cal.png' },
    { name: 'สุขภาพ', slug: 'healthy', image: '/images/icon/food.png' },
    { name: 'ผู้มีโรคประจำตัว', slug: 'underlying-disease', image: '/images/icon/life.png' },
    { name: 'ความรู้เพิ่มเติม', slug: 'knowledge', image: '/images/icon/know.png' }
];