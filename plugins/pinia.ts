import { useCardsStore } from '~/stores/CardsStore'

export default defineNuxtPlugin(({ $pinia }) => {
  return {
    provide: {
      store: useCardsStore($pinia)
    }
  }
})
