/*
 * DomLastic.js
 * https://github.com/ymc-thzi/domlastic.js
 *
 * Thomas Zinnbauer @ YMC
 *
 * 2017 YMC AG | Sonnenstrasse 4 | CH-8280 Kreuzlingen | Switzerland
 * http://www.ymc.ch
 *
 */
var domLastic = function() {

    "use strict";
    var $ = jQuery;

    //set defalut specs
    var itemsClassnameToConnect = null;
    var itemsJointStrength = 20; //optimum between 10 - 100
    var animationSpeed = 600; // value optimum 300 - 1000
    var animationIntensity = 0.5; // value optimum 0.5 - 1
    var animationDirection = 'vertical';
    var callback = null;

    /*
     * private setSpecs
     */
    function setSpecs(spec) {
        if (spec) {
            if (spec.itemsClassnameToConnect) {
                itemsClassnameToConnect = spec.itemsClassnameToConnect
            }
            if (spec.itemsJointStrength) {
                itemsJointStrength = spec.itemsJointStrength
            }
            if (spec.animationSpeed) {
                animationSpeed = spec.animationSpeed
            }
            if (spec.animationIntensity) {
                animationIntensity = spec.animationIntensity
            }
            if (spec.animationDirection) {
                animationDirection = spec.animationDirection
            }
            if (spec.callback) {
                callback = spec.callback
            }
        }
    }

    /*
     * private checkMandatoryParams
     */
    function checkSpecs() {
        if (!itemsClassnameToConnect) {
            throw 'Error: DomLastic "itemsClassnameToConnect" is not set.';
        }
        if (animationDirection !== 'horizontal' && animationDirection !== 'vertical') {
            throw 'Error: DomLastic "animationDirection" wrong value. Allowed values: "vertical" or "horizontal".';
        }
        if (callback && typeof callback !== 'function') {
            throw 'Error: DomLastic "callback" is not a function';
        }
        if (isNaN(itemsJointStrength)) {
            throw 'Error: DomLastic "itemsJointStrength" is not a number';
        }
        if (isNaN(animationSpeed)) {
            throw 'Error: DomLastic "animationSpeed" is not a number';
        }
        if (isNaN(animationIntensity)) {
            throw 'Error: DomLastic "animationIntensity" is not a number';
        }
    }

    /*
     * private addGeneratedAnimationStyles
     */
    function generateAnimationStyles() {

        var cssCommon = '.DomLastic-animate {' +
            'animation-name: animate;' +
            'animation-duration: ' + animationSpeed + 'ms;' +
            'animation-timing-function: linear;' +
            'animation-fill-mode: both;' +
            'animation-play-state: running;' +
            '}';

        var i = 0;
        var valuesCount = 6;
        var scaleMinValue = 0.7;
        var scaleMaxValue = 1;
        var scaleXValues = [1.05, 1, 1.025, 1, 1.01, 1];
        var scaleYValues = [
            scaleMinValue,
            scaleMaxValue,
            scaleMinValue + 0.15,
            scaleMaxValue,
            scaleMinValue + 0.25,
            scaleMaxValue
        ];
        var moveValue = 1;
        var moveValues = [
            moveValue - animationIntensity * 20,
            moveValue + animationIntensity * 20,
            moveValue - animationIntensity * 4,
            moveValue + animationIntensity * 6,
            moveValue + animationIntensity * 4,
            moveValue + animationIntensity * 5
        ];

        var cssKeyframes = '@keyframes animate {';

        for (i = 0; i < valuesCount; i++) {

            var keyframeSel = i / (valuesCount - 1) * 100;
            var scaleX = scaleXValues[i];
            var scaleY = scaleYValues[i];
            var posY = moveValues[i];

            if (animationDirection === 'vertical') {
                cssKeyframes +=
                    keyframeSel + '% {' +
                    'transform: scale(' + scaleX + ', ' + scaleY + ') translate(0,' + (posY - i) + 'px);' +
                    '}';
            }

            if (animationDirection === 'horizontal') {
                cssKeyframes +=
                    keyframeSel + '% {' +
                    'transform: scale(' + scaleX + ', ' + scaleX + ') translate(' + (posY - i) + 'px, 0);' +
                    '}';
            }
        }

        cssKeyframes +=
            '100% { ' +
            'transform: scale(1, 1) translate(0,0);' +
            '}' +
            '}';

        return '<style>' +
            cssCommon +
            cssKeyframes +
            '</style>'
    }

    /*
     * private addGeneratedAnimationStyles
     */
    function addGeneratedAnimationStyles() {
        var animationStyles = generateAnimationStyles();
        $(document).find('head').append(animationStyles);
    }

    /*
     * private registerCallback
     */
    function registerCallback() {
        setTimeout(function() {
            if (typeof callback === 'function') {
                callback.call(this);
            }
        }, animationSpeed);
    }

    /*
     * public methods
     */
    return {
        /*
         * public init
         */
        init: function(spec) {
            setSpecs(spec);
            checkSpecs();
            addGeneratedAnimationStyles();

        },

        /*
         * public animateItems
         */
        animateItems: function() {
            $(document).find('.' + itemsClassnameToConnect).each(function(index) {
                var element = $(this);
                setTimeout(function() {
                    element.addClass('DomLastic-animate');
                }, (index * itemsJointStrength) + Math.floor((Math.random() * 10) + 1));
            });
            setTimeout(function() {
                $(document).find('.' + itemsClassnameToConnect).removeClass('DomLastic-animate');
            }, animationSpeed + 100);
            registerCallback();
        }

    };
}();
