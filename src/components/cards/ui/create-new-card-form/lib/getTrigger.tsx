import { Button, Icon } from '@/components/ui'

export const getTrigger = (hasImageUrl?: null | string) => {
  return (
    <Button fullWidth type={'button'} variant={'secondary'}>
      {hasImageUrl ? (
        <>
          <Icon name={'common/edit'} />
          Change image
        </>
      ) : (
        <>
          <Icon name={'common/image'} />
          Upload image
        </>
      )}
    </Button>
  )
}
