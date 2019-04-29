export default{
    state: {
        products: [
            {
                id: 1,
                title: 'Ручка',
                price: 15.90
            },
            {
                id: 2,
                title: 'Ластик',
                price: 30.90
            },
            {
                id: 3,
                title: 'Клей',
                price: 45.60
            }
        ]
    },

    getters: {
        GET_PRODUCTS: state => state.products
    },

    mutations: {

    },

    actions: {

    }
}