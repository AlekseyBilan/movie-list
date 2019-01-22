import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

function CutTextOverflow(props){
        let getTextWidth = (text, font) => {
                let canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
                let context = canvas.getContext("2d");
                context.font = font;
                let metrics = context.measureText(text);
                return metrics.width;
        };
        let getLineHeight = (element) => {
            let lineHeight = window.getComputedStyle(element)['line-height'];
            if (lineHeight === 'normal') {
                return 1.16 * parseFloat(window.getComputedStyle(element)['font-size']);
            } else {
                return parseFloat(lineHeight);
            }
        };
        let getCutText = () => {
            let resultTextStr = '', defTextStr = props.text, container = props.container;
            let lines = parseInt(container.clientHeight/parseInt(getLineHeight(container)));
            let font = window.getComputedStyle(container)['font-weight']+' '+ window.getComputedStyle(container)['font-size']+' '+ window.getComputedStyle(container)['font-family'];

            let words = defTextStr.split(' ');
            while (lines > 0) {
                let lineTextStr = '';
                while(getTextWidth(lineTextStr, font) <= container.clientWidth && words.length > 0){
                    lineTextStr += ' ' + words.shift();
                }
                if( lines === 1 && words.length > 0) lineTextStr += ' ...';
                resultTextStr += lineTextStr;
                --lines;
            }

            return resultTextStr;
        };
        return (
            <Fragment>{props.contentLoaded ? getCutText() : null}</Fragment>
        )
}

CutTextOverflow.propTypes = {
    text: PropTypes.string.isRequired,
    container: PropTypes.object.isRequired,
    contentLoaded: PropTypes.bool.isRequired
};

export default CutTextOverflow;