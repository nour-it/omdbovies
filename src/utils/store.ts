import { create } from 'zustand'

const useStore = create((set) => ({

    bots    : [],
    messages: [],
    groups  : [],

    setBots: (bots) => set((state) => ({ ...state, bots})),
    addBot : (bot) => set((state) => ({ ...state, bots: state.bots.filter(b => b.id != bot.id).concat(bot) })),
    addBots: (bots) => set((state) => ({ ...state, bots: state.bots.concat(bots) })),

    setMessages: (messages) => set((state) => ({ ...state, messages: messages })),
    addMessage : (message) => set((state) => ({ ...state, messages: state.messages.concat(message) })),
    addMessages: (messages) => set((state) => ({ ...state, messages: state.messages.concat(messages) })),

    setGroups: (groups) => set((state) => ({ ...state, groups: groups })),
    addGroup : (group) => set((state) => ({ ...state, groups: state.groups.concat(group) })),
    addGroups: (groups) => set((state) => ({ ...state, groups: state.groups.concat(groups) })),
    
}))

export default useStore;