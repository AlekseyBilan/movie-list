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
        if (lineHeight === 'normal' || !lineHeight) {
            return 1.3 * parseFloat(window.getComputedStyle(element)['font-size']);
        } else {
            return parseFloat(lineHeight);
        }
    };

    let getCutText = () => {
        let defTextStr = props.text, container = props.container;
        let height = props.height || container.clientHeight;
        let lines = parseInt(height/parseInt(getLineHeight(container)));
        let resultWidth = Math.floor((lines-1) * container.clientWidth);
        let font = window.getComputedStyle(container)['font-weight']+' '+ window.getComputedStyle(container)['font-size']+' '+ window.getComputedStyle(container)['font-family'];
        while(getTextWidth(defTextStr, font) >= resultWidth){
            defTextStr = defTextStr.slice(0, -5);
        }

        return defTextStr + ' ...';
    };

    let getLayout = () => {
        if(props.returnText && props.contentLoaded){
            return getCutText()
        }else{
            return <Fragment>{getCutText()}</Fragment>
        }
    };

    return getLayout();
}

CutTextOverflow.propTypes = {
    text: PropTypes.string.isRequired,
    height: PropTypes.string,//value in px (example - "155")
    container: PropTypes.object.isRequired,
    returnText: PropTypes.bool,
    contentLoaded: PropTypes.bool.isRequired
};

export default CutTextOverflow;