// Adds a button to hide the input part of the currently selected cells

define([
    'jquery',
    'base/js/namespace',
    'base/js/events'
], function(
    $,
    Jupyter,
    events
) {
    "use strict";

    var update_input_visibility = function () {
      Jupyter.notebook.get_cells().forEach(function(cell) {
        window.lastCell = cell;
        if (cell.metadata.hide) {
            cell.element.hide();
        }
      })
    };

    var load_ipython_extension = function() {
      // Collapse all cells that are marked as hidden
      if (Jupyter.notebook !== undefined && Jupyter.notebook._fully_loaded) {
          // notebook already loaded. Update directly
          update_input_visibility();
      }
      events.on("notebook_loaded.Notebook", update_input_visibility);
    };

    return {
        load_ipython_extension : load_ipython_extension
    };
});