import React, { Component } from 'react';
import { I18nProvider, LOCALES } from './i18n';
import NavBar from './components/Navbar';
import UserList from './components/UserList';

class App extends Component {

  constructor() {
    super()
    this.changeLanguage = this.changeLanguage.bind(this)

    this.state = {
      locale: LOCALES.TURKISH
    }
  }

  render() {
    return (
      <div>
        <I18nProvider locale={this.state.locale}>
          <NavBar changeLanguage={this.changeLanguage} />
          <UserList />
        </I18nProvider>
      </div >
    )
  }

  changeLanguage(value) {
    this.setState({ locale: value })
  }
}

export default App