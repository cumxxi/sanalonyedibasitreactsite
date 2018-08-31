import React from 'react'
import { connect } from 'react-redux' // Bu sayfayı map edeceğimiz için connect'i ekledik
import { userInit } from 'store/userReducer'    // Buraya ekleme yaptık reduceri'i

class LoginView extends React.Component {
  constructor () {  // Bu kısım yapıcı fonksiyon kısmı
    super()         // Burada state'nin ilk hali oluşturuluyor
    this.state = {  // yani başka bir değiş ile başlangıç statesi
      email : '',
      password : ''
    }
  }

  emailChanged (e) {  // ismi biz verdik ve bu kısım değişen state
    this.setState({
      email : e.target.value  // hedef olarak bu değer aranacak
    })
  }

  passwordChanged (e) {  // ismi biz verdik ve bu kısım değişen state
    this.setState({
      password:e.target.value // hedef olarak bu değer aranacak
    })
  }

  onUserClick () {  // user giriş 'i tıkladığında burada bir
    // Http Call  // yapılması lazım
    console.log(this.state)
    const user = {
      name : 'melih Korkmaz',
      email : 'asdj@falan.com',
      age : '35',
      gender : 'male'
    }

    this.props.loginUserData(user)
  }

  render () {
    const onChangeView = this.props.onChangeView  // onChangeView değişkenine aktarıldı

    if (this.props.userData.name) {
      return <div>LOGİN OLDU</div>
    } else {
      return (
        <div>
          <form className='form-inline' id='girisForm'>
            <div className='form-group'>
              <label className='col-form-label col-sm-1 sr-only'>Email</label>
              <input className='form-control' type='text' placeholder='Emil@mail.com' value={this.state.email} onChange={this.emailChanged.bind(this)} />
            </div>
            <div className='form-group mx-sm-3'>
              <label className='col-form-label col-sm-1 sr-only'>Şifre</label>
              <input className='form-control' type='password' placeholder='Password' value={this.state.password} onChange={this.passwordChanged.bind(this)} />
            </div>
            <div>
              <button className='form-control btn btn-outline-light' onClick={this.onUserClick.bind(this)} type='submit'>Giriş</button>
            </div>
            <div className='form-inline' id='sifremiUnuttum'>
              <a href='#' onClick={e => { e.preventDefault(); onChangeView(3) }}><cite>Şifremi Unuttum</cite></a>
              <label className='col-sm-1' />
              <a href='#' onClick={e => { e.preventDefault(); onChangeView(2) }} ><cite>Kayıt Ol</cite></a>
            </div>
          </form>
        </div>
      )
    }
  }
}

// Action Creator'u bu componentin property'sine bağladık

const mapStateToProps = (state) => {
  return {
    userData : state.user  // yukarıda if ile kullanmıştık
  }
}

// Dispatch = sevk etmek
// user reducer'i buradan bağlamış olduk.
const mapDispatchToProps = (dispatch) => {
  return {
    loginUserData : (user) => dispatch(userInit(user))  // Bu kısım userReducer'in
  }                                                     // Action creator'uından geliyor
}
// Reducer'i "run" edileceği yani koşturacak Reducer'e gönderecek
export default connect(mapStateToProps, mapDispatchToProps)(LoginView)  /* tekrar parantez
açmasının sebebi connect fonksiyonu yeni bir fonksiyon çağırdığı için */

/* Birşeyi map edeceksek üstteki gibi connect fonksiyonunu çağırmamız gerekiyor.
alt satırda ki gibi export default LoginView dememize gerek yok */
// export default LoginView

/* Connect 2 parametre alıyor
1- state props'a bağlanırsa
2- Action demişti ama şimdi Action creator yani buradaki kullanılmış şekli ile dispatch'i
*/
