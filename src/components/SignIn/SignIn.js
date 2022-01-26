import React from 'react';
import * as S from './SignIn.styles.js';

const SignIn = () => {
    return (
       <S.SignIn>
           <S.SignIn__FormWrap>
               <S.SignIn__Logo to='/'>dolla</S.SignIn__Logo>
               <S.SingIn__FormContent>
                   <S.SignIn__Form action='#'>
                       <S.SignIn__FormHeading>Sign in to your account</S.SignIn__FormHeading>
                       <S.SignIn__FormLabel htmlFor='for'>Email</S.SignIn__FormLabel>
                       <S.SignIn__FormInput type='email' required />
                       <S.SignIn__FormLabel htmlFor='for'>Password</S.SignIn__FormLabel>
                       <S.SignIn__FormInput type='password' required />
                       <S.SignIn__FormButton type='submit'>Continue</S.SignIn__FormButton>
                       <S.SignIn__FormForgotLink>Forgot password?</S.SignIn__FormForgotLink>
                   </S.SignIn__Form>
               </S.SingIn__FormContent>
           </S.SignIn__FormWrap>
       </S.SignIn>
    );
}

export default SignIn;
