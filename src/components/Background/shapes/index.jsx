import React from 'react';

export class Polygon extends React.Component {
    render() {
        let leftest = Infinity;
        let toppest = Infinity;
        let rightest = -Infinity;
        let bottomest = -Infinity;

        const points = this.props.points.reduce((str, point) => {
            const { x, y } = point;

            if (x < leftest) {
                leftest = x;
            } else if (x > rightest) {
                rightest = x;
            }

            if (y < toppest) {
                toppest = y;
            } else if (y > bottomest) {
                bottomest = y;
            }
            return `${str}${x},${y} `;

        }, "");

        // TODO: use leftest and toppest to properly offset left and right of SVG
        return (
            <svg style={{ position: "absolute", fill: this.props.c || "black", width: rightest, height: bottomest }}>
                <polygon points={points} />
            </svg>
        );
    }
}

export class Diamond extends React.Component {
    render() {
        const x = this.props.x;
        const y = this.props.y;
        const w = this.props.w;
        const h = this.props.h;
        const halfW = w / 2;
        const halfH = h / 2;

        return <Polygon points={[
            { x: x + halfW, y: y },
            { x: x + w, y: y + halfH },
            { x: x + halfW, y: y + h },
            { x: x, y: y + halfH },
        ]}
            c={this.props.c} />
    }
}

export class Rectangle extends React.Component {
    render() {
        return <div style={{
            position: "absolute",
            left: this.props.x,
            top: this.props.y,
            width: this.props.w,
            height: this.props.h,
            background: this.props.c || "black"
        }} />
    }
}

export class Square extends React.Component {
    render() {
        return <Rectangle
            x={this.props.x}
            y={this.props.y}
            w={this.props.s}
            h={this.props.s}
            c={this.props.c} />
    }
}

export class RegDiamond extends React.Component {
    render() {
        return <Diamond
            x={this.props.x}
            y={this.props.y}
            w={this.props.s}
            h={this.props.s}
            c={this.props.c} />
    }
}

export class Oval extends React.Component {
    render() {
        return <div style={{
            position: "absolute",
            left: this.props.x,
            top: this.props.y,
            width: this.props.w,
            height: this.props.h,
            borderRadius: "50%",
            background: this.props.c || "black"
        }} />
    }
}

export class Circle extends React.Component {
    render() {
        return <Oval
            x={this.props.x}
            y={this.props.y}
            w={this.props.d}
            h={this.props.d}
            c={this.props.c} />
    }
}