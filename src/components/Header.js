import React from 'react'

class Header extends React.Component {
  constructor () {
    super()
    this.state = {
      isNavOpen : false
    }
  }

  buttonClick () {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    })
  }

  render () {
    console.log('rendering')
    return (
      <header>
        <nav className='container navbar navbar-expand-lg navbar-outline-dark justify-content-between'>
          <a className='navbar-brand' href='#'>Navbar</a>
          <button className='navbar-toggler' type='button' onClick={this.buttonClick.bind(this)}>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='navbar-collapse' style={{ display : this.state.isNavOpen ? 'block' : 'none' }}>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <a className='nav-link' href='#'>Ana Sayfa
               <span className='sr-only'>(current)</span>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>İkinci Sayfa</a>
              </li>
              <li className='nav-item dropdown'>
                <a className='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button'
                  data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Düşey Menü</a>
                <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <a className='dropdown-item' href='#'>birinci satır</a>
                  <a className='dropdown-item' href='#'>ikinci satır</a>
                  <div className='dropdown-divider'>Ayrılan Bölüm</div>
                  <a className='dropdown-item' href='#'>Ayrık satır</a>
                </div>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>Üçüncü sayfa</a>
              </li>
            </ul>
            <form className='form-inline my-2 my-lg-0' id='arama'>
              <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' />
              <button className='btn btn-outline-light'>Search</button>
            </form>
          </div>
        </nav>
      </header>
    )
  }
  }

export default Header
