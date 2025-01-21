export default {
    achat: {
        publicOffersUrl: `/achat`,
        offerDetailUrl: (id) => `/achat/offer/${id}`,
    }, 
    dashboard: {
        index: '/dashboard',
        userOffersUrl: "/dashboard/offer",
        userOfferDetail: (id) => `/dashboard/offer/${id}`
    }
}