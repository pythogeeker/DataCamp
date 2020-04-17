define(["base/js/namespace","base/js/events"], function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCellWithKey = getCellWithKey;
exports.getKeys = getKeys;
function getCellWithKey(cells, key) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = cells[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var cell = _step.value;

      var dcKey = cell.metadata.dc && cell.metadata.dc.key;
      if (dcKey && dcKey === key) {
        return cell;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return null;
}

function getKeys(cells) {
  return cells.map(function (cell) {
    return cell.metadata.dc && cell.metadata.dc.key;
  });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.load_ipython_extension = undefined;

var _namespace = __webpack_require__(0);

var _namespace2 = _interopRequireDefault(_namespace);

var _handlers = __webpack_require__(5);

__webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bindIncomingMessageEvent = function bindIncomingMessageEvent() {
  window.addEventListener("message", handleMessage, false);
};

function handleMessage(event, origin) {
  var data = event.data;
  var eventHandler = _handlers.listeners[data.action];
  if (eventHandler) {
    eventHandler(data.payload);
  } else {
    console.warn('No handler for "' + data.action + '" event');
  }
}

function disableMoving() {
  // Remove the toolbar buttons
  $(_namespace2.default.toolbar.element[0]).find('#move_up_down').remove();
  function disable($element) {
    $element.addClass('disabled');
    $element.off('click');
  }
  disable($('#move_cell_up'));
  disable($('#move_cell_down'));
}

var load_ipython_extension = exports.load_ipython_extension = function load_ipython_extension() {
  disableMoving();
  bindIncomingMessageEvent();
  (0, _handlers.senders)();
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.senders = exports.listeners = undefined;

var _jump_task = __webpack_require__(6);

var _jump_task2 = _interopRequireDefault(_jump_task);

var _check_project = __webpack_require__(7);

var _check_project2 = _interopRequireDefault(_check_project);

var _stop_kernel = __webpack_require__(8);

var _stop_kernel2 = _interopRequireDefault(_stop_kernel);

var _limit_functionality = __webpack_require__(9);

var _limit_functionality2 = _interopRequireDefault(_limit_functionality);

var _set_download_link = __webpack_require__(10);

var _set_download_link2 = _interopRequireDefault(_set_download_link);

var _jump_task3 = __webpack_require__(11);

var _jump_task4 = _interopRequireDefault(_jump_task3);

var _lifecycle = __webpack_require__(12);

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _notebook_broken = __webpack_require__(13);

var _notebook_broken2 = _interopRequireDefault(_notebook_broken);

var _notebook_stop_execution = __webpack_require__(14);

var _notebook_stop_execution2 = _interopRequireDefault(_notebook_stop_execution);

var _add_cell = __webpack_require__(16);

var _add_cell2 = _interopRequireDefault(_add_cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var listeners = exports.listeners = {
  jump_task: _jump_task2.default,
  check_project: _check_project2.default,
  stop_kernel: _stop_kernel2.default,
  limit_functionality: _limit_functionality2.default,
  set_download_link: _set_download_link2.default
};

var senders = exports.senders = function senders() {
  (0, _jump_task4.default)();
  (0, _lifecycle2.default)();
  (0, _notebook_broken2.default)();
  (0, _notebook_stop_execution2.default)();
  (0, _add_cell2.default)();
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (params) {
  var key = params.task_key;
  var cell = (0, _tools.getCellWithKey)(_namespace2.default.notebook.get_cells(), key);
  _namespace2.default.notebook.scroll_manager.scroll_to(cell.element);
  cell.focus_cell();
};

var _namespace = __webpack_require__(0);

var _namespace2 = _interopRequireDefault(_namespace);

var _tools = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _namespace = __webpack_require__(0);

var _namespace2 = _interopRequireDefault(_namespace);

var _events = __webpack_require__(1);

var _events2 = _interopRequireDefault(_events);

var _tools = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isCheckingProject = false;
var uncheckedTestKeys = [];

var isTestCell = function isTestCell(cell) {
  return cell.metadata.tags && Array.isArray(cell.metadata.tags) && cell.metadata.tags.indexOf("tests") !== -1;
};

var patchExecuteCodeCell = function patchExecuteCodeCell() {
  var codeCellProto = _namespace2.default.CodeCell.prototype;
  var executeCell = codeCellProto.execute;

  codeCellProto.execute = function () {
    if (isTestCell(this) && !isCheckingProject) return;
    executeCell.apply(this, arguments);
  };

  _events2.default.on('finished_execute.CodeCell', function (event, _ref) {
    var cell = _ref.cell;

    if (isTestCell(cell)) {
      var testOutputs = cell.output_area.outputs.filter(function (output) {
        return output.output_type === 'display_data' && output.data["application/json"];
      }).map(function (output) {
        return JSON.parse(output.data["application/json"]);
      });
      var taskKey = cell.metadata.dc && cell.metadata.dc.key;
      // remove the tested cell from the list
      var keyIndex = uncheckedTestKeys.indexOf(taskKey);
      if (keyIndex !== -1) uncheckedTestKeys.splice(keyIndex, 1);
      window.parent.postMessage({
        action: 'show_test_result',
        payload: {
          task_key: taskKey,
          test_results: testOutputs
        }
      }, '*');
    }
  });
};

var handleKernelStoppages = function handleKernelStoppages(event, _ref2) {
  var cell = _ref2.cell;


  var wasExecuting = false;
  var setWasExecuting = function setWasExecuting(event) {
    wasExecuting = true;
  };

  _events2.default.on('kernel_busy.Kernel', setWasExecuting);
  setTimeout(function () {
    if (!wasExecuting) {

      uncheckedTestKeys.forEach(function (key) {
        window.parent.postMessage({
          action: 'show_test_result',
          payload: {
            task_key: key,
            test_results: []
          }
        }, '*');
      });
      uncheckedTestKeys = [];
    }
    _events2.default.off('kernel_busy.Kernel', setWasExecuting);
  }, 500);
};

// if notebook stops executing, send events for all unchecked test cells
_events2.default.on('kernel_idle.Kernel', handleKernelStoppages);
_events2.default.on('kernel_restarting.Kernel', handleKernelStoppages);
_events2.default.on('kernel_autorestarting.Kernel', handleKernelStoppages);

patchExecuteCodeCell();

exports.default = function () {
  isCheckingProject = true;
  var notebook = _namespace2.default.notebook;
  var currentCell = notebook.get_selected_cell();
  uncheckedTestKeys = (0, _tools.getKeys)(_namespace2.default.notebook.get_cells().filter(isTestCell));
  notebook.kernel.execute('%reset -f', {
    shell: { reply: function reply() {
        notebook.execute_cell_range(0, notebook.ncells());
        isCheckingProject = false;
        notebook.select(notebook.find_cell_index(currentCell));
      } }
  }, {
    silent: false,
    store_history: true,
    stop_on_error: false
  });
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _namespace = __webpack_require__(0);

var _namespace2 = _interopRequireDefault(_namespace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  _namespace2.default.notebook.kernel.interrupt();
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _namespace = __webpack_require__(0);

var _namespace2 = _interopRequireDefault(_namespace);

var _events = __webpack_require__(1);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var itemsToDisable = ['#download_ipynb', '[data-jupyter-action="jupyter-notebook:confirm-restart-kernel"]', '[data-jupyter-action="jupyter-notebook:show-command-palette"]', '#menu-new-notebook-submenu', '#file_menu > #new_notebook', '#file_menu > #open_notebook', '#file_menu > #copy_notebook', '#file_menu > #rename_notebook', '#file_menu > .dropdown-submenu:has(#download_menu)', '#file_menu > #kill_and_exit', '#edit_menu > #split_cell', '#edit_menu > #merge_cell_above', '#edit_menu > #merge_cell_below', '#edit_menu > #move_cell_up', '#edit_menu > #move_cell_down', '#edit_menu > #edit_nb_metadata', '#kernel_menu > #shutdown_kernel', '#kernel_menu > #menu-change-kernel', '#help_menu > #keyboard_shortcuts', '#help_menu > #edit_keyboard_shortcuts'];

var commandShortcutsToDisable = ['cmdtrl-shift-F', // open command pallet
'cmdtrl-shift-P', // open command pallet
'P', // open command pallet
'shift-M', // merge selected cells, or current cell with cell below if only one cell selected
'H'];

var editShortcutsToDisable = ['cmdtrl-shift-F', // open command pallet
'cmdtrl-shift-P', // open command pallet
'ctrl-shift-minus'];

exports.default = function (_ref) {
  var mode = _ref.mode;

  if (mode !== 'CERTIFICATION') return;

  itemsToDisable.forEach(function (selector) {
    var element = $(selector);
    element.off();
    element.hide();
  });

  commandShortcutsToDisable.forEach(function (shortcut) {
    _namespace2.default.keyboard_manager.command_shortcuts.remove_shortcut(shortcut);
  });

  editShortcutsToDisable.forEach(function (shortcut) {
    _namespace2.default.keyboard_manager.edit_shortcuts.remove_shortcut(shortcut);
  });

  $("<style type='text/css'> .cmd-palette{ display: none !important} </style>").appendTo("head");
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _namespace = __webpack_require__(0);

var _namespace2 = _interopRequireDefault(_namespace);

var _events = __webpack_require__(1);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (params) {
  var downloadLocation = params.downloadLink;
  var downloadButton = $('#download_ipynb');
  downloadButton.off(); // remove existing handler
  downloadButton.on('click', function (event, target) {
    window.open(downloadLocation, '_blank');
  });
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  _events2.default.on('select.Cell', function (event, _ref) {
    var cell = _ref.cell;

    var key = cell.metadata.dc && cell.metadata.dc.key;
    window.parent.postMessage({
      action: 'jump_task',
      payload: { task_key: key }
    }, '*');
  });
};

var _namespace = __webpack_require__(0);

var _namespace2 = _interopRequireDefault(_namespace);

var _events = __webpack_require__(1);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _namespace = __webpack_require__(0);

var _namespace2 = _interopRequireDefault(_namespace);

var _events = __webpack_require__(1);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var isLoadedEventSent = false;
  var postLoadedMessage = function postLoadedMessage() {
    if (isLoadedEventSent) return;
    isLoadedEventSent = true;
    window.parent.postMessage({
      action: 'notebook_loaded',
      payload: {}
    }, '*');
  };

  _events2.default.on('notebook_loaded.Notebook', postLoadedMessage);
  if (_namespace2.default.notebook !== undefined && _namespace2.default.notebook._fully_loaded) {
    postLoadedMessage();
  }

  // events.on('notebook_load_failed.Notebook', () => {
  //   window.parent.postMessage({
  //     action: 'notebook_load_failed',
  //     payload: {}
  //   }, '*')
  // });
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _namespace = __webpack_require__(0);

var _namespace2 = _interopRequireDefault(_namespace);

var _events = __webpack_require__(1);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var broken_events = ['kernel_connection_failed.Kernel'];

exports.default = function () {
  var postBrokenMessage = function postBrokenMessage(eventName) {
    window.parent.postMessage({
      action: 'notebook_broken',
      payload: {
        eventName: eventName
      }
    }, '*');
  };

  broken_events.forEach(function (event) {
    _events2.default.on(event, function () {
      return postBrokenMessage(event);
    });
  });
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _namespace = __webpack_require__(0);

var _namespace2 = _interopRequireDefault(_namespace);

var _events = __webpack_require__(1);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var broken_events = ['kernel_reconnecting.Kernel', 'kernel_connection_dead.Kernel', 'kernel_restarting.Kernel', 'kernel_disconnected.Kernel', 'kernel_killed.Kernel', 'kernel_killed.Session', 'kernel_dead.Kernel', 'no_kernel.Kernel', 'kernel_dead.Session'];

exports.default = function () {
  var postBrokenMessage = function postBrokenMessage(eventName) {
    window.parent.postMessage({
      action: 'notebook_stop_execution',
      payload: {
        eventName: eventName
      }
    }, '*');
  };

  broken_events.forEach(function (event) {
    _events2.default.on(event, function () {
      return postBrokenMessage(event);
    });
  });
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * The domain is changed in order to enable cross-domain communication. Removing
 * the sub-domain is allowed and doing that on the parent window and the iframe
 * makes them on the same domain.
 *
 * See more: https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy
 */

var domainParts = document.domain.split('.');
if (domainParts.length > 1) {
  document.domain = domainParts.slice(-2).join('.');
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  _events2.default.on('create.Cell', function (event, _ref) {
    var cell = _ref.cell,
        index = _ref.index;

    var nextCell = _namespace2.default.notebook.get_cell(index + 1);
    cell._metadata.dc = nextCell._metadata.dc;
  });
};

var _namespace = __webpack_require__(0);

var _namespace2 = _interopRequireDefault(_namespace);

var _events = __webpack_require__(1);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })
/******/ ])});;