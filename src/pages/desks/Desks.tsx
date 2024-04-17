import { Page } from '@/components/layout'
import { useGetDecksQuery } from '@/services/decks/decks.service'

export const Desks = () => {
  const {} = useGetDecksQuery()

  return <Page>Desks</Page>
}
