import React, {Component} from 'react';
import PropTypes from 'prop-types'


class Header extends Component {

    render() {
        const {branding} = this.props
        return (
            <div>
                <h1>{branding}</h1>
            </div>
        );
    }
}

Header.defaultProps = {
    branding: 'MyApp'
}
Header.propTypes = {
    branding: PropTypes.string.isRequired
}
export default Header;
