import React, { Component } from 'react';


class LanguageTag extends Component {
    render() {
      const { language } = this.props;
      return (
            <span className="language-tag">
              {language}
            </span>
        )
    }
}


export default LanguageTag;
