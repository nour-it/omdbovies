
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "userStore",
  initialState: {
    offer: [],
    souscription: [],
    tontine: [],
    adhesion: [],
    publication: [],
    parution: [],
    engagement: [],
    associationMembered: [],
    user: {},
  },
  reducers: {
    setAll(state, action) {
      return action.payload
    },
    setOffer(state, action) { },
    setSouscription(state, action) { },
    setTontine(state, action) { },
    setAdhesion(state, action) { },
    setPublication(state, action) { },
    setParution(state, action) { },
    setEngagement(state, action) { },
    setAssociationMemberd(state, action) { },
    setUser(state, action) { },
  },
});

export const { setAll } = slice.actions;

export default slice.reducer

export class UserStore {

  /**@type{Array} */
  offer;
  /**@type{Array} */
  souscription;
  /**@type{Array} */
  tontine;
  /**@type{Array} */
  adhesion;
  /**@type{Array} */
  publication;
  /**@type{Array} */
  parution;
  /**@type{Array} */
  engagement;
  /**@type{Array} */
  associationMembered;
  /**@type{Objet} */
  user;

}