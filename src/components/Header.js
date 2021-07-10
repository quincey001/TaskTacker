 
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
         console.log('click the add button')
    }
    return (
        <header className='header'>
            <h1 style={headingStyle}>{title}</h1>
            <Button color='green' text='ADD'onClick={onClick}/>
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
