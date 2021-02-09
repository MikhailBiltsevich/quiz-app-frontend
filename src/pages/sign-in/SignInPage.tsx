import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputComponent from "../../components/InputComponent/InputComponent";

 const SignInPage = () => {
  return (
    <div className='row'>
      <form className='col-sm-10 col-md-3'>
        <InputComponent id='login' label='Username' type='text' handler={() => { }} />
        <InputComponent id='password' label='Password' type='password' handler={() => { }} />
        <ButtonComponent text='Sign in' classNames={['primary']}/>
      </form>
    </div>
  );
}

export default SignInPage