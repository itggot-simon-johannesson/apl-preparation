import React from "react"
import PropTypes from "prop-types"
class Ball extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div style={ballStyle}></div>
      </React.Fragment>
    );
  }
}

const ballStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '100%',
  backgroundColor: 'red'
}

// Ball.propType = {
//   color: PropTypes.string
// };
export default Ball
