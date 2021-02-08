import ButtonComponent from '../ButtonComponent/ButtonComponent';

interface IProps {
  user?: {
    id: number,
    login: string
  }
}

const HeaderComponent = (props: IProps) => {
  function signOutHandler(): void {
  }

  return (
    <header className='sticky row'>
      <span className='logo col-sm-12 col-md-2'>quizes</span>
      {props.user &&
        <>
          <span className='button col-sm-12 col-md'>{props.user.login}</span>
          <ButtonComponent classNames={['button', 'col-sm-12', 'col-md-2']} handlerClick={signOutHandler} text='Sign out' />
        </>
      }
    </header>
  )
}

export default HeaderComponent;