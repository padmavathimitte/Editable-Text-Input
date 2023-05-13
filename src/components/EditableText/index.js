import {Component} from 'react'

import './index.css'

class EditableText extends Component {
  state = {
    isEnteredText: false,
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onClickButton = () => {
    this.setState(prevState => ({
      isEnteredText: !prevState.isEnteredText,
    }))
  }

  render() {
    const {isEnteredText, searchInput} = this.state
    const buttonText = isEnteredText ? 'Edit' : 'Save'
    const divText = isEnteredText ? (
      <p className="text">{searchInput}</p>
    ) : (
      <input
        type="search"
        value={searchInput}
        onChange={this.onChangeSearchInput}
        className="input"
      />
    )

    return (
      <div className="app-container">
        <div className="text-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="content-container">
            <p className="text">{divText}</p>
            <button
              type="button"
              onClick={this.onClickButton}
              className="button"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditableText
