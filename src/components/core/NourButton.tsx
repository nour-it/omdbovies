import React from 'react'

/**
 * 
 * @param {React.ReactElement.props} props 
 * @returns {JSX.Element}
 */
export default function NourButton(props) {

  if (props.href) {
    return <a {...props}>{props.children}</a>
  }
  return (
    <button {...props}>{props.children}</button>
  )
}
