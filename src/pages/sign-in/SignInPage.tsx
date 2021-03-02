import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputComponent from "../../components/InputComponent/InputComponent";
import InputGroupComponent from "../../components/InputGroupComponent/InputGroupComponent";

const SignInPage = () => {
  const handleSubmit = () => { };
  const handlePasswordChange = () => { };
  const handleUsernameChange = () => { };

  return (
    <div className='row'>
      <div className='col-sm-12 col-md-5 col-lg-3'>
        <form>
          <InputGroupComponent labelText='Username'>
            <InputComponent id='login' placeholder='Username' type='text' onChange={handleUsernameChange} />
          </InputGroupComponent>
          <InputGroupComponent labelText='Password'>
            <InputComponent id='password' placeholder='Password' type='password' onChange={handlePasswordChange} />
          </InputGroupComponent>
          <ButtonComponent text='Sign in' classNames={['primary']} onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
}

export default SignInPage