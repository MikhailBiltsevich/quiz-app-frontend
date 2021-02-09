interface IProps {
  content?: any
}

const HeaderComponent = (props: IProps) => {
  const { content } = props;

  return (
    <header className='sticky row'>
      <span className='logo col-sm-12 col-md-2'>quizes</span>
      {content}
    </header>
  )
}

export default HeaderComponent;