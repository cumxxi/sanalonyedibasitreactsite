import React from 'react'

const PasswordResetView = ({onChangeView}) => (
  <form className='form-group' id='sifreReset'>
    <div className='form-group row mr-auto ml-auto'>
      <div className='form-group'>
        <label className='col-form-label col-sm-1 sr-only'>Email</label>
        <input className='form-control' type='text' placeholder='Emil@mail.com' />
      </div>
      <div className='form-group mx-sm-3'>
        <button className='form-control btn btn-outline-light' type='submit'>Şifre Reset</button>
      </div>
    </div>
    <div className='form-inline' id='sifreDegistir'>
      <a href='#' onClick={e => { e.preventDefault(); onChangeView(1) }} ><cite>Şifremi Sifirla</cite></a>
    </div>
  </form>
)

export default PasswordResetView
