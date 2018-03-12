(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

var _component = require('./libs/component');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var onDOMContentLoadedTasks = [function () {
    window.__CHECK_ALL__ = _component2.default.init('.js-check__all');

    document.getElementById('item-1').addEventListener('change', function (e) {
        console.log(e.target.checked);
    });
}];

{
    onDOMContentLoadedTasks.forEach(function (fn) {
        return fn();
    });
}

},{"./libs/component":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defaults = require('./lib/defaults');

var _defaults2 = _interopRequireDefault(_defaults);

var _lib = require('./lib');

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var init = function init(sel, opts) {
	var els = [].slice.call(document.querySelectorAll(sel));

	if (!els.length) return console.warn('No check all buttons found');

	return els.map(function (el) {
		return Object.create((0, _lib2.default)(el, Object.assign({}, _defaults2.default, opts)));
	});
};

exports.default = { init: init };

},{"./lib":5,"./lib/defaults":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var KEY_CODES = exports.KEY_CODES = [32];

var TRIGGER_EVENTS = exports.TRIGGER_EVENTS = ['click', 'keyup'];

var DATA_ATTRIBUTES = exports.DATA_ATTRIBUTES = {
    SELECTOR: 'data-group',
    GROUP_NAME: 'data-group-name'
};

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    defaultLabel: 'Check all',
    activeLabel: 'Uncheck all'
};

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = require('./constants');

var _utils = require('./utils');

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
        (0, _utils.dispatchSyntheticEvent)(node, 'change');
    });
    state.labelNode.innerText = state.checked ? state.settings.activeLabel : state.settings.defaultLabel;
};

exports.default = function (node, settings) {
    state = Object.assign({}, state, {
        node: node,
        settings: settings,
        labelNode: node.nodeName.toLowerCase() === 'input' ? document.querySelector('[for="' + node.getAttribute('id') + '"]') : node,
        groupNodes: [].slice.call(document.querySelectorAll('[' + _constants.DATA_ATTRIBUTES.GROUP_NAME + '="' + node.getAttribute(_constants.DATA_ATTRIBUTES.SELECTOR) + '"]'))
    });

    _constants.TRIGGER_EVENTS.forEach(function (ev) {
        node.addEventListener(ev, function (e) {
            if (!e.keyCode || node.nodeName.toLowerCase() !== 'input' && !!~_constants.KEY_CODES.indexOf(e.keyCode)) toggle();
        });
    });

    return {
        toggle: toggle
    };
};

},{"./constants":3,"./utils":6}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var dispatchSyntheticEvent = exports.dispatchSyntheticEvent = function dispatchSyntheticEvent(node, eventType) {
    var event = document.createEvent('Event');
    event.initEvent(eventType, true, true);
    node.dispatchEvent(event);
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJleGFtcGxlL3NyYy9saWJzL2NvbXBvbmVudC9pbmRleC5qcyIsImV4YW1wbGUvc3JjL2xpYnMvY29tcG9uZW50L2xpYi9jb25zdGFudHMuanMiLCJleGFtcGxlL3NyYy9saWJzL2NvbXBvbmVudC9saWIvZGVmYXVsdHMuanMiLCJleGFtcGxlL3NyYy9saWJzL2NvbXBvbmVudC9saWIvaW5kZXguanMiLCJleGFtcGxlL3NyYy9saWJzL2NvbXBvbmVudC9saWIvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7Ozs7OztBQUVBLElBQU0sMkJBQTJCLFlBQU0sQUFDbkM7V0FBQSxBQUFPLGdCQUFnQixvQkFBQSxBQUFTLEtBQWhDLEFBQXVCLEFBQWMsQUFFckM7O2FBQUEsQUFBUyxlQUFULEFBQXdCLFVBQXhCLEFBQWtDLGlCQUFsQyxBQUFtRCxVQUFVLGFBQUssQUFDOUQ7Z0JBQUEsQUFBUSxJQUFJLEVBQUEsQUFBRSxPQUFkLEFBQXFCLEFBQ3hCO0FBRkQsQUFHSDtBQU5ELEFBQWdDLENBQUE7O0FBUWhDLEFBQUU7NEJBQUEsQUFBd0IsUUFBUSxVQUFBLEFBQUMsSUFBRDtlQUFBLEFBQVE7QUFBeEMsQUFBZ0Q7Ozs7Ozs7Ozs7QUNWbEQ7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNLE9BQU8sU0FBUCxBQUFPLEtBQUEsQUFBQyxLQUFELEFBQU0sTUFBUyxBQUMzQjtLQUFJLE1BQU0sR0FBQSxBQUFHLE1BQUgsQUFBUyxLQUFLLFNBQUEsQUFBUyxpQkFBakMsQUFBVSxBQUFjLEFBQTBCLEFBRWxEOztLQUFHLENBQUMsSUFBSixBQUFRLFFBQVEsT0FBTyxRQUFBLEFBQVEsS0FBZixBQUFPLEFBQWEsQUFFcEM7O1lBQU8sQUFBSSxJQUFJLGNBQUE7U0FBTSxPQUFBLEFBQU8sT0FBTyxtQkFBQSxBQUFRLElBQUksT0FBQSxBQUFPLE9BQVAsQUFBYyx3QkFBOUMsQUFBTSxBQUFjLEFBQVksQUFBNEI7QUFBM0UsQUFBTyxBQUNQLEVBRE87QUFMUjs7a0JBUWUsRUFBRSxNLEFBQUY7Ozs7Ozs7O0FDWFIsSUFBTSxnQ0FBWSxDQUFsQixBQUFrQixBQUFFOztBQUVwQixJQUFNLDBDQUFpQixDQUFBLEFBQUUsU0FBekIsQUFBdUIsQUFBVzs7QUFFbEMsSUFBTTtjQUFrQixBQUNqQixBQUNWO2dCQUZHLEFBQXdCLEFBRWY7QUFGZSxBQUMzQjs7Ozs7Ozs7O2tCQ0xXLEFBQ0csQUFDZDtpQixBQUZXLEFBRUU7QUFGRixBQUNYOzs7Ozs7Ozs7QUNESjs7QUFDQTs7QUFFQSxJQUFJLFFBQVEsRUFBRSxTQUFkLEFBQVksQUFBVzs7QUFFdkIsSUFBTSxTQUFTLFNBQVQsQUFBUyxTQUFNLEFBQ2pCO21CQUFRLEFBQU8sT0FBUCxBQUFjLElBQWQsQUFBa0I7aUJBQ2IsQ0FBQyxNQURkLEFBQVEsQUFBeUIsQUFDYixBQUVwQjtBQUhpQyxBQUM3QixLQURJO0FBSVg7QUFMRDs7QUFPQSxJQUFNLFNBQVMsU0FBVCxBQUFTLFNBQU0sQUFDakI7VUFBQSxBQUFNLFdBQU4sQUFBaUIsUUFBUSxnQkFBUSxBQUM3QjthQUFBLEFBQUssVUFBVSxNQUFmLEFBQXFCLEFBQ3JCOzJDQUFBLEFBQXVCLE1BQXZCLEFBQTZCLEFBQ2hDO0FBSEQsQUFJQTtVQUFBLEFBQU0sVUFBTixBQUFnQixZQUFZLE1BQUEsQUFBTSxVQUFVLE1BQUEsQUFBTSxTQUF0QixBQUErQixjQUFjLE1BQUEsQUFBTSxTQUEvRSxBQUF3RixBQUMzRjtBQU5EOztrQkFRZSxVQUFBLEFBQUMsTUFBRCxBQUFPLFVBQWEsQUFDL0I7bUJBQVEsQUFBTyxPQUFQLEFBQWMsSUFBZCxBQUFrQjtjQUFPLEFBRTdCO2tCQUY2QixBQUc3QjttQkFBVyxLQUFBLEFBQUssU0FBTCxBQUFjLGtCQUFkLEFBQWdDLFVBQVUsU0FBQSxBQUFTLHlCQUF1QixLQUFBLEFBQUssYUFBckMsQUFBZ0MsQUFBa0IsUUFBNUYsUUFIa0IsQUFHdUYsQUFDcEg7b0JBQVksR0FBQSxBQUFHLE1BQUgsQUFBUyxLQUFLLFNBQUEsQUFBUyx1QkFBcUIsMkJBQTlCLEFBQThDLG9CQUFlLEtBQUEsQUFBSyxhQUFhLDJCQUEvRSxBQUE2RCxBQUFrQyxZQUo3SCxBQUFRLEFBQXlCLEFBSWpCLEFBR2hCO0FBUGlDLEFBQzdCLEtBREk7OzhCQU9SLEFBQWUsUUFBUSxjQUFNLEFBQ3pCO2FBQUEsQUFBSyxpQkFBTCxBQUFzQixJQUFJLGFBQUssQUFDM0I7Z0JBQUcsQ0FBQyxFQUFELEFBQUcsV0FBWSxLQUFBLEFBQUssU0FBTCxBQUFjLGtCQUFkLEFBQWdDLFdBQVcsQ0FBQyxDQUFDLENBQUMscUJBQUEsQUFBVSxRQUFRLEVBQWxGLEFBQWdFLEFBQW9CLFVBQVcsQUFDbEc7QUFGRCxBQUdIO0FBSkQsQUFNQTs7O2dCQUFBLEFBQU8sQUFHVjtBQUhVLEFBQ0g7QTs7Ozs7Ozs7QUNuQ0QsSUFBTSwwREFBeUIsU0FBekIsQUFBeUIsdUJBQUEsQUFBQyxNQUFELEFBQU8sV0FBYyxBQUN2RDtRQUFJLFFBQVEsU0FBQSxBQUFTLFlBQXJCLEFBQVksQUFBcUIsQUFDakM7VUFBQSxBQUFNLFVBQU4sQUFBZ0IsV0FBaEIsQUFBMkIsTUFBM0IsQUFBaUMsQUFDakM7U0FBQSxBQUFLLGNBQUwsQUFBbUIsQUFDdEI7QUFKTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiaW1wb3J0IENoZWNrQWxsIGZyb20gJy4vbGlicy9jb21wb25lbnQnO1xuXG5jb25zdCBvbkRPTUNvbnRlbnRMb2FkZWRUYXNrcyA9IFsoKSA9PiB7XG4gICAgd2luZG93Ll9fQ0hFQ0tfQUxMX18gPSBDaGVja0FsbC5pbml0KCcuanMtY2hlY2tfX2FsbCcpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tMScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5jaGVja2VkKTtcbiAgICB9KVxufV07XG5cbnsgb25ET01Db250ZW50TG9hZGVkVGFza3MuZm9yRWFjaCgoZm4pID0+IGZuKCkpOyB9IiwiaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4vbGliL2RlZmF1bHRzJztcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4vbGliJztcblxuY29uc3QgaW5pdCA9IChzZWwsIG9wdHMpID0+IHtcblx0bGV0IGVscyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWwpKTtcblxuXHRpZighZWxzLmxlbmd0aCkgcmV0dXJuIGNvbnNvbGUud2FybignTm8gY2hlY2sgYWxsIGJ1dHRvbnMgZm91bmQnKTtcbiAgICBcblx0cmV0dXJuIGVscy5tYXAoZWwgPT4gT2JqZWN0LmNyZWF0ZShmYWN0b3J5KGVsLCBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cywgb3B0cykpKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IGluaXQgfTsiLCJleHBvcnQgY29uc3QgS0VZX0NPREVTID0gWyAzMiBdO1xuXG5leHBvcnQgY29uc3QgVFJJR0dFUl9FVkVOVFMgPSBbICdjbGljaycsICdrZXl1cCcgXTtcblxuZXhwb3J0IGNvbnN0IERBVEFfQVRUUklCVVRFUyA9IHtcbiAgICBTRUxFQ1RPUjogJ2RhdGEtZ3JvdXAnLFxuICAgIEdST1VQX05BTUU6ICdkYXRhLWdyb3VwLW5hbWUnXG59OyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0TGFiZWw6ICdDaGVjayBhbGwnLFxuICAgIGFjdGl2ZUxhYmVsOiAnVW5jaGVjayBhbGwnXG59OyIsImltcG9ydCB7IEtFWV9DT0RFUywgVFJJR0dFUl9FVkVOVFMsIERBVEFfQVRUUklCVVRFUyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IGRpc3BhdGNoU3ludGhldGljRXZlbnQgfSBmcm9tICcuL3V0aWxzJztcblxubGV0IHN0YXRlID0geyBjaGVja2VkOiBmYWxzZSB9O1xuXG5jb25zdCB0b2dnbGUgPSAoKSA9PiB7XG4gICAgc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBjaGVja2VkOiAhc3RhdGUuY2hlY2tlZFxuICAgIH0pO1xuICAgIHJlbmRlcigpO1xufTtcblxuY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIHN0YXRlLmdyb3VwTm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgbm9kZS5jaGVja2VkID0gc3RhdGUuY2hlY2tlZDtcbiAgICAgICAgZGlzcGF0Y2hTeW50aGV0aWNFdmVudChub2RlLCAnY2hhbmdlJyk7XG4gICAgfSk7XG4gICAgc3RhdGUubGFiZWxOb2RlLmlubmVyVGV4dCA9IHN0YXRlLmNoZWNrZWQgPyBzdGF0ZS5zZXR0aW5ncy5hY3RpdmVMYWJlbCA6IHN0YXRlLnNldHRpbmdzLmRlZmF1bHRMYWJlbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IChub2RlLCBzZXR0aW5ncykgPT4ge1xuICAgIHN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbm9kZSxcbiAgICAgICAgc2V0dGluZ3MsXG4gICAgICAgIGxhYmVsTm9kZTogbm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2Zvcj1cIiR7bm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJyl9XCJdYCkgOiBub2RlLFxuICAgICAgICBncm91cE5vZGVzOiBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFske0RBVEFfQVRUUklCVVRFUy5HUk9VUF9OQU1FfT1cIiR7bm9kZS5nZXRBdHRyaWJ1dGUoREFUQV9BVFRSSUJVVEVTLlNFTEVDVE9SKX1cIl1gKSlcbiAgICB9KTtcblxuICAgIFRSSUdHRVJfRVZFTlRTLmZvckVhY2goZXYgPT4ge1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXYsIGUgPT4ge1xuICAgICAgICAgICAgaWYoIWUua2V5Q29kZSB8fCAobm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnaW5wdXQnICYmICEhfktFWV9DT0RFUy5pbmRleE9mKGUua2V5Q29kZSkpKSB0b2dnbGUoKTtcbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRvZ2dsZVxuICAgIH1cbn07IiwiZXhwb3J0IGNvbnN0IGRpc3BhdGNoU3ludGhldGljRXZlbnQgPSAobm9kZSwgZXZlbnRUeXBlKSA9PiB7XG4gICAgbGV0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgZXZlbnQuaW5pdEV2ZW50KGV2ZW50VHlwZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgbm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn07Il19
