interface IProps {
  user?: {
    id: number,
    login: string
  }
}

export default function HeaderComponent(props: IProps) {
  return (
    <header className='sticky row'>
      <span className='logo col-sm-12 col-md-2'>quizes</span>
      {props.user &&
        <>
          <span className='button col-sm-12 col-md'>{props.user.login}</span>
          <button className='button col-sm-12 col-md-2'>Sign out</button>
        </>
      }
    </header>
  )
}