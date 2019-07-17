/**
 * Props:
 * @type string: 'text', 'numeric', 'tags', 'password', 'email', 'masked'
 * @width string: '100%'
 * @icon node:
 * @placeholder string
 * @label string
 * @button node
 * @onChange func
 * @className string
 * @outlined
 * @mask string
 * @rows number
 */


/**
 * @mask
 * prefix (string): what to display before the amount. Defaults to '$'.
 * suffix (string): what to display after the amount. Defaults to empty string.
 * includeThousandsSeparator (boolean): whether or not to separate thousands. Defaults to to true.
 * thousandsSeparatorSymbol (string): character with which to separate thousands. Default to ','.
 * allowDecimal (boolean): whether or not to allow the user to enter a fraction with the amount. Default to false.
 * decimalSymbol (string): character that will act as a decimal point. Defaults to '.'
 * decimalLimit (number): how many digits to allow after the decimal. Defaults to 2
 * integerLimit (number): limit the length of the integer number. Defaults to null for unlimited
 * requireDecimal (boolean): whether or not to always include a decimal point and placeholder for decimal digits after the integer. Defaults to false.
 * allowNegative (boolean): whether or not to allow negative numbers. Defaults to false
 * allowLeadingZeroes (boolean): whether or not to allow leading zeroes. Defaults to false
 */

import React from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles, Typography } from '@material-ui/core';
import { Input, InputNumber, DatePicker, Radio } from 'antd';

// import Inputmask from "inputmask";
// import InputMask from 'react-input-mask';
import { conformToMask,convertMaskToPlaceholder } from 'text-mask-core';
/**
 * 
 * conformToMask accepts three arguments:

text (string) (required)
mask (array) (required)
config (object) (optional)

  // These configurations tell us how to conform the mask
  const {
    guide = true,
    previousConformedValue = emptyString,
    placeholderChar = defaultPlaceholderChar,
    placeholder = convertMaskToPlaceholder(mask, placeholderChar),
    currentCaretPosition,
    keepCharPositions
  } = config
 */
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
/**
 * prefix (string): what to display before the amount. Defaults to '$'.
 * suffix (string): what to display after the amount. Defaults to empty string.
 * includeThousandsSeparator (boolean): whether or not to separate thousands. Defaults to to true.
 * thousandsSeparatorSymbol (string): character with which to separate thousands. Default to ','.
 * allowDecimal (boolean): whether or not to allow the user to enter a fraction with the amount. Default to false.
 * decimalSymbol (string): character that will act as a decimal point. Defaults to '.'
 * decimalLimit (number): how many digits to allow after the decimal. Defaults to 2
 * integerLimit (number): limit the length of the integer number. Defaults to null for unlimited
 * requireDecimal (boolean): whether or not to always include a decimal point and placeholder for decimal digits after the integer. Defaults to false.
 * allowNegative (boolean): whether or not to allow negative numbers. Defaults to false
 * allowLeadingZeroes (boolean): whether or not to allow leading zeroes. Defaults to false
 */
import emailMask from 'text-mask-addons/dist/emailMask'

import 'antd/dist/antd.css';

// Component styles
import styles from './styles';

class CustomInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.defaultValue || '',
        }
    }

    onChange = (e) => {
    
        let { value } = e.target;
        let { mask, type, onChange, numberMask } = this.props;
        // let numberMask = createNumberMask({
        //     prefix: '',
        //     suffix: ' $' // This will put the dollar sign at the end, with a space.
        // });
        onChange && onChange(e);
        if(mask && type === "formatted") {
            var result = conformToMask(
                value,
                mask,
                {
                    guide: false,
                }
            )
            value = result.conformedValue;
        }
        else if(type === "numeric") {
            if(numberMask) {
                let _numberMask = createNumberMask(numberMask);
                let result = conformToMask(
                    value,
                    _numberMask,
                    {
                        guide: false,
                    }
                )
                value = result.conformedValue;
            }
        }
        else if(type === "datetime") {
        }
        this.setState({ value });
    
    }

    renderInput(props, value) {
        const { className, type, labelStyle, rows, classes, autosize, onChange, mask, multiline, ...rest } = props;
        const rootClassname = classNames(classes.root, className);
        const numericClassname = classNames(classes.numeric, className);

        const { TextArea } = Input;
        const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

        const ref = React.createRef();

        if(type === "numeric") {
            return <Input ref={ref} value={value} className={numericClassname} onChange={e => this.onChange(e)} {...rest} />
        }
        else if(multiline) {
            return <TextArea ref={ref} value={value} className={rootClassname} autosize={multiline && autosize != null} rows={rows} onChange={e => this.onChange(e)} {...rest} />
        }
        // else if(type === "datetime") {
        //     return <DatePicker ref={ref} size="large" {...rest} />
        // }
        return <Input value={value} ref={ref} className={rootClassname} onChange={e => this.onChange(e)} {...rest}/>
    }

    render() {
        const { className, type, labelStyle, placeholder, rows, classes, autosize, label, onChange, mask, ...rest } = this.props;
        const { value } = this.state;
        const labelClassname = classNames(classes.label, labelStyle);

        return (
            <div>
                {label && <Typography className={labelClassname}>{label}</Typography>}
                {this.renderInput(this.props, value)}
            </div>
        );
    }
}

CustomInput.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    width: PropTypes.string,
    icon: PropTypes.node,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string,
    labelStyle: PropTypes.string,
    button: PropTypes.node,
    mask: PropTypes.array,
    rows: PropTypes.number,
    multiline: PropTypes.bool,
    defaultValue: PropTypes.string,
    numberMask: PropTypes.object,
    formatter: PropTypes.func
};

CustomInput.defaultProps = {
    type: 'text',
    width: '100%',
    placeholder: 'Placeholder',
    rows: 0,
    onChange: null,
    multiline: false
};
export default withStyles(styles)(CustomInput);