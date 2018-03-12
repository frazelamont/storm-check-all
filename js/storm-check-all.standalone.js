/**
 * @name storm-check-all: Checkbox group state management
 * @version 0.1.0: Mon, 12 Mar 2018 14:14:40 GMT
 * @author stormid
 * @license MIT
 */
(function(root, factory) {
   var mod = {
       exports: {}
   };
   if (typeof exports !== 'undefined'){
       mod.exports = exports
       factory(mod.exports)
       module.exports = mod.exports.default
   } else {
       factory(mod.exports);
       root.StormCheckAll = mod.exports.default
   }

}(this, function(exports) {
   'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var defaults = {
    defaultLabel: 'Check all',
    activeLabel: 'Uncheck all'
};

var KEY_CODES = [32];

var TRIGGER_EVENTS = ['click', 'keyup'];

var DATA_ATTRIBUTES = {
    SELECTOR: 'data-group',
    GROUP_NAME: 'data-group-name'
};

var dispatchSyntheticEvent = function dispatchSyntheticEvent(node, eventType) {
    var event = document.createEvent('Event');
    event.initEvent(eventType, true, true);
    node.dispatchEvent(event);
};

var state = { checked: false };

var toggle = function toggle() {
    state = Object.assign({}, state, {
        checked: !state.checked
    });
    render();
};

var render = function render() {
    state.groupNodes.forEach(function (node) {
        node.checked = state.checked;
        dispatchSyntheticEvent(node, 'change');
    });
    state.labelNode.innerText = state.checked ? state.settings.activeLabel : state.settings.defaultLabel;
};

var factory = function factory(node, settings) {
    state = Object.assign({}, state, {
        node: node,
        settings: settings,
        labelNode: node.nodeName.toLowerCase() === 'input' ? document.querySelector('[for="' + node.getAttribute('id') + '"]') : node,
        groupNodes: [].slice.call(document.querySelectorAll('[' + DATA_ATTRIBUTES.GROUP_NAME + '="' + node.getAttribute(DATA_ATTRIBUTES.SELECTOR) + '"]'))
    });

    TRIGGER_EVENTS.forEach(function (ev) {
        node.addEventListener(ev, function (e) {
            if (!e.keyCode || node.nodeName.toLowerCase() !== 'input' && !!~KEY_CODES.indexOf(e.keyCode)) toggle();
        });
    });

    return {
        toggle: toggle
    };
};

var init = function init(sel, opts) {
    var els = [].slice.call(document.querySelectorAll(sel));

    if (!els.length) return console.warn('No check all buttons found');

    return els.map(function (el) {
        return Object.create(factory(el, Object.assign({}, defaults, opts)));
    });
};

var index = { init: init };

exports.default = index;;
}));
