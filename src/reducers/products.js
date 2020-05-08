var initialState = [
    {
        id: 1,
        name: 'iphone 7',
        image: 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1663778378.jpeg',
        description: 'sp cua apple',
        price: 500,
        inventory: 10,
        rating: 5
    },

    {
        id: 2,
        name: 'samsung s7',
        image: 'https://didongviet.vn/pub/media/catalog/product//s/a/samsung-galaxy-s8-plus-xanh-san-ho-didongviet_3.jpg',
        description: 'sp cua samsung',
        price: 200,
        inventory: 5,
        rating: 4
    },

    {
        id: 3,
        name: 'redmi pro',
        image: 'https://clickbuy.com.vn/uploads/2019/09/thumb-Note-8-3.jpg',
        description: 'sp cua xiaomi',
        price: 100,
        inventory: 3,
        rating: 3
    }
];

const reducer = (state = initialState, action) => {
    return state
}

export default reducer;