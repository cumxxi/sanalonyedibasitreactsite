import React from 'react'

const LoginView = ({onChangeView}):any => (
  <div>
    <form className='form-inline' id='girisForm'>
      <div className='form-group'>
        <label className='col-form-label col-sm-1 sr-only'>Email</label>
        <input className='form-control' type='text' placeholder='Emil@mail.com' />
      </div>
      <div className='form-group mx-sm-3'>
        <label className='col-form-label col-sm-1 sr-only'>Şifre</label>
        <input className='form-control' type='password' placeholder='Password' />
      </div>
      <div>
        <button className='form-control btn btn-outline-light' type='submit'>Giriş</button>
      </div>
      <div className='form-inline' id='sifremiUnuttum'>
        <a href='#'><cite>Şifremi Unuttum</cite></a>
        <label className='col-sm-1' />
        <a href='#' onClick={e=> {e.preventDefault(); onChangeView(2)}} ><cite>Kayıt Ol</cite></a>
      </div>
    </form>
  </div>
)

export default LoginView
