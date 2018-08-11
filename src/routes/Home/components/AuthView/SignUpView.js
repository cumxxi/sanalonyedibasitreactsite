import React from 'react'

const SignUpView = (onChangeView) => (
  <form className='form-group' id='kayitForm'>
    <div className='form-group row mr-auto ml-auto'>
      <div className='form-group'>
        <label className='col-form-label col-sm-1 sr-only'>Email</label>
        <input className='form-control' type='text' placeholder='Emil@mail.com' />
      </div>
      <div className='form-group mx-sm-3'>
        <button className='form-control btn btn-outline-light' type='submit'>Kayıt Ol</button>
      </div>
    </div>
    <div className='form-inline' id='sifremiUnuttum'>
      <a href='#' onClick={e=> {e.preventDefault(); onChangeView(1)}}>
        <cite>Zaten Üyeyim</cite></a>
    </div>
  </form>
)

export default SignUpView
