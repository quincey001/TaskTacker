 
import PropTypes from 'prop-types'
import Button from './Button'
import {useLocation }from 'react-router-dom'
const Header = ({title,add, showAddTask}) => { 
    const location = useLocation()
    return (
        <header className='header'>
            <h1 style={headingStyle}>{title}</h1>
            {location.pathname === '/' && <Button color={showAddTask ? 'red': 'green'} text={showAddTask ? 'Close': 'Add'} onClick={add}/>}
            
        </header>
    )
}
Header.defaultProps = {
    title:'Header',

}
Header.protoTypes = {
    title: PropTypes.string.isRequired,
}
//css in js
const headingStyle = {
    color: 'blue', 
    border: 'solid 1px',
}
export default Header
