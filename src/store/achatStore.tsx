
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "achatStore",
    initialState: {
        publicOffers: {
            total: 0,
            items: [],
        },
        filtre: {
        },
        categories: [],
    },
    reducers: {
        setPublicOffers(state, action) {
            return {
                ...state,
                publicOffers: {
                    total: action.payload.total,
                    items: state.publicOffers.items.concat(action.payload.items)
                }
            }
        },
        setCategories(state, action) {
            return {
                ...state,
                categories: action.payload
            }
        },
        setFilter(state, action) {
            return {
                ...state,
                filtre: {...state.filtre, ...action.payload}
            }
        }
    },
});

export const { setPublicOffers, setCategories, setFilter } = slice.actions;

export default slice.reducer

export class AchatStore {
    /** @type {PublicOffers} */
    publicOffers;

    /**@type {Filter} */
    filtre;

    /**@type {Array} */
    categories;

}

class PublicOffers {
    /**@type {Number} */
    total;

    /**@type {Array} */
    items;
}

class Filter {

}