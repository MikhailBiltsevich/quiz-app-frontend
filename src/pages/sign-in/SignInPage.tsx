import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputComponent from "../../components/InputComponent/InputComponent";

const SignInPage = () => {
  const handleSubmit = () => { };
  const handlePasswordChange = () => { };
  const handleUsernameChange = () => { };

  return (
    <div className='row'>
      <div className='col-sm-12 col-md-5 col-lg-3'>
        <form>
          <InputComponent id='login' label='Username' type='text' onChange={handleUsernameChange} />
          <InputComponent id='password' label='Password' type='password' onChange={handlePasswordChange} />
          <ButtonComponent text='Sign in' classNames={['primary']} onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
}

export default SignInPage