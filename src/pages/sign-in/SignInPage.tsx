import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputComponent from "../../components/InputComponent/InputComponent";

const SignInPage = () => {
  const handleSubmit = () => { };
  const handlePasswordChange = () => { };
  const handleUsernameChange = () => { };

  return (
    <div className='row'>
      <form className='col-sm-10 col-md-3'>
        <InputComponent id='login' label='Username' type='text' onChange={handleUsernameChange} />
        <InputComponent id='password' label='Password' type='password' onChange={handlePasswordChange} />
        <ButtonComponent text='Sign in' classNames={['primary']} onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default SignInPage