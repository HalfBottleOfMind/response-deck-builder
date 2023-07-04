import { useCardsStore } from '../stores/CardsStore'
import { useDeckStore } from '../stores/DeckStore'

export default defineNuxtPlugin(({ $pinia }) => {
  return {
    provide: {
      cardsStore: useCardsStore($pinia),
      deckStore: useDeckStore($pinia),
    }
  }
})
