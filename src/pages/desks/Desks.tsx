import { Page } from '@/components/layout'
import { useGetDecksQuery } from '@/services/decks/decks.service'

export const Desks = () => {
  const {} = useGetDecksQuery()

  console.log(document)

  return <Page>Desks</Page>
}
