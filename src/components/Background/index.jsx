import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Shapes
import {
    Layer, Rect, Stage, Group, Star
} from 'react-konva';

// Utils
import {
    pastelGenerator
} from 'common/utils';

// Material helpers
import { withStyles } from '@material-ui/core';

import {
    Circle
} from './shapes'

// Component styles
import styles from './styles';

const renderShapes = (shapeType, count, width, height) => {
    let background = [];
    for (let index = 0; index < count; index++) {
        const scale = Math.random() * 6;
        let shape;
        switch (shapeType) {
            case 'circle':
                shape = <Circle
                    x={((Math.random() * (width - 2 * (50 * scale)) * 100) / (width - (50 * scale))) + '%'}
                    y={((Math.random() * (height - 2 * (50 * scale)) * 100) / (height - (50 * scale))) + '%'}
                    d={50 * scale}
                    c={pastelGenerator()} />
                //         shape = <circle key={index} cx={Math.random() * width}
                // cy={Math.random() * height} 
                // r={50 * scale}
                // fill={ pastelGenerator()} />
                break;
                // case ' rect':
                //     shape = <Rect
                //     x={Math.random() * width}
                //     y={Math.random() * height}
                //     width={50}
                //     height={50}
                //     scale={{
                //         x: scale,
                //         y: scale
                //     }} 
                //     fill={ pastelGenerator()}
                //   />
                //     break;
                // case 'star':
                //     shape = <Star
                //     x={Math.random() * width}
                //     y={Math.random() * height}
                //     numPoints={5}
                //     innerRadius={30}
                //     outerRadius={50}
                //     fill={ pastelGenerator()}
                //     opacity={0.8}
                //     draggable={true}
                //     scale={{
                //         x: scale,
                //         y: scale
                //     }}
                //     rotation={Math.random() * 180}
                // //               shadowColor='black'
                // //               shadowBlur={10}
                // //               shadowOffset={{
                // //                 x : 5,
                // //                 y : 5
                // //               }}
                // //               shadowOpacity={0.6}
                // //               // custom attribute
                // //               startScale={scale}
                // />
                break;
        }
        background.push(shape);
    }
    return (background);
}

const Background = props => {
    const { classes, className, style, shape, count, width, height, children, ...rest } = props;

    const rootClassName = classNames(classes.root, className);

    return (
        <div
            className={rootClassName}
            style={style}>
            {/* {renderShapes(shape, count, width, height)} */}
            <div className={classes.foreground}>
                {children}
            </div>
        </div>
    );
};


Background.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    shape: PropTypes.string,
    count: PropTypes.number
};

Background.defaultProps = {
    shape: 'circle',
    count: 10,
};

export default withStyles(styles)(Background);

