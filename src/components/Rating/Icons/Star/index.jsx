import React, { Component } from 'react'
import PropTypes from 'prop-types'

const StrokedStarSvg = (props) => (<div>
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size ? props.size : 24} height={props.size ? props.size : 24} viewBox={props.size ? ("0 0 " + props.size + " " + props.size) : "0 0 24 24"}>
        <g stroke="#CCCCCC" fill="none" >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
        </g>
    </svg>
</div>)

const HalfStarSvg = (props) => (<div><svg xmlns="http://www.w3.org/2000/svg" width={props.size ? props.size : 24} height={props.size ? props.size : 24} viewBox={props.size ? ("0 0 " + props.size + " " + props.size) : "0 0 24 24"}>
    <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524v-12.005zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" /></svg></div>)

const FilledStarSvg = (props) => (<div>
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size ? props.size : 24} height={props.size ? props.size : 24} viewBox={props.size ? ("0 0 " + props.size + " " + props.size) : "0 0 24 24"}>
        <g fill="#f1c40f" >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
        </g>
    </svg>
</div>);

const HoveredStarSvg = (props) => (<div>
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size ? props.size : 24} height={props.size ? props.size : 24} viewBox={props.size ? ("0 0 " + props.size + " " + props.size) : "0 0 24 24"}>
        <g fill="#CCCCCC" >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
        </g>
    </svg>
</div>)

class Star extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    renderStarSvg(props) {
        return (
            props.isActiveHalf ? <HalfStarSvg size={props.size} /> :
            props.willBeActive ? <HoveredStarSvg size={props.size} /> :
                (props.isActive ? <FilledStarSvg size={props.size} /> : <StrokedStarSvg size={props.size} />)
        )
    }

    render() {
        const props = this.props
        const {
            isDisabled,
            isActive,
            isActiveHalf,
            willBeActive,
            size
        } = this.props
        const starProps = Object.assign({}, props)
        const nameMap = {
            isDisabled: 'is-disabled',
            isActive: 'is-active',
            isActiveHalf: 'is-active-half',
            willBeActive: 'will-be-active'
        }
        const className = Object.keys(nameMap)
            .filter(prop => (delete starProps[prop], props[prop]))
            .map(prop => nameMap[prop])
            .join(' ')

        return <div className={`react-rater-star ${className}`} {...starProps}>
            {this.renderStarSvg(props)}
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg> */}
        </div>
    }
}

Star.defaultProps = {
    willBeActive: false,
    isActive: false,
    isActiveHalf: false,
    isDisabled: false,
    size: 24
}

Star.propTypes = {
    isActive: PropTypes.bool,
    isActiveHalf: PropTypes.bool,
    willBeActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    size: PropTypes.number
}

export default Star
