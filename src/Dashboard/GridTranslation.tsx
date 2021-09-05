import { GridLocaleText } from "@material-ui/data-grid";

export const GRID_DEFAULT_LOCALE_TEXT: GridLocaleText = {
  // Root
  noRowsLabel: "No rows",
  noResultsOverlayLabel: "No results found.",
  errorOverlayDefaultLabel: "An error occurred.",

  // Density selector toolbar button text
  toolbarDensity: "Density",
  toolbarDensityLabel: "Density",
  toolbarDensityCompact: "Compact",
  toolbarDensityStandard: "Standard",
  toolbarDensityComfortable: "Comfortable",

  // Columns selector toolbar button text
  toolbarColumns: "Columns",
  toolbarColumnsLabel: "Select columns",

  // Filters toolbar button text
  toolbarFilters: "Filters",
  toolbarFiltersLabel: "Show filters",
  toolbarFiltersTooltipHide: "Hide filters",
  toolbarFiltersTooltipShow: "Show filters",
  toolbarFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} active filters` : `${count} active filter`,

  // Export selector toolbar button text
  toolbarExport: "Export",
  toolbarExportLabel: "Export",
  toolbarExportCSV: "הורדה ל- CSV",

  // Columns panel text
  columnsPanelTextFieldLabel: "חיפוש עמודה",
  columnsPanelTextFieldPlaceholder: "כותרת עמודה",
  columnsPanelDragIconLabel: "Reorder column",
  columnsPanelShowAllButton: "הצג הכול",
  columnsPanelHideAllButton: "הסתר הכול",

  // Filter panel text
  filterPanelAddFilter: "Add filter",
  filterPanelDeleteIconLabel: "Delete",
  filterPanelOperators: "Operators",
  filterPanelOperatorAnd: "And",
  filterPanelOperatorOr: "Or",
  filterPanelColumns: "Columns",
  filterPanelInputLabel: "Value",
  filterPanelInputPlaceholder: "Filter value",

  // Filter operators text
  filterOperatorContains: "contains",
  filterOperatorEquals: "equals",
  filterOperatorStartsWith: "starts with",
  filterOperatorEndsWith: "ends with",
  filterOperatorIs: "is",
  filterOperatorNot: "is not",
  filterOperatorAfter: "is after",
  filterOperatorOnOrAfter: "is on or after",
  filterOperatorBefore: "is before",
  filterOperatorOnOrBefore: "is on or before",
  filterOperatorIsEmpty: "ריק",
  filterOperatorIsNotEmpty: "לא ריק",

  // Filter values text
  filterValueAny: "הכול",
  filterValueTrue: "כן",
  filterValueFalse: "לא",

  // Column menu text
  columnMenuLabel: "תפריט",
  columnMenuShowColumns: "הצגת עמודות",
  columnMenuFilter: "סינון",
  columnMenuHideColumn: "הסתר",
  columnMenuUnsort: "ביטול מיון",
  columnMenuSortAsc: "מיון מהנמוך לגבוה",
  columnMenuSortDesc: "מיון מהגבוה לנמוך",

  // Column header text
  columnHeaderFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} active filters` : `${count} active filter`,
  columnHeaderFiltersLabel: "Show filters",
  columnHeaderSortIconLabel: "Sort",

  // Rows selected footer text
  footerRowSelected: (count) =>
    count !== 1
      ? `${count.toLocaleString()} rows selected`
      : `${count.toLocaleString()} row selected`,

  // Total rows footer text
  footerTotalRows: "Total Rows:",

  // Total visible rows footer text
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    `${visibleCount.toLocaleString()} of ${totalCount.toLocaleString()}`,

  // Checkbox selection text
  checkboxSelectionHeaderName: "Checkbox selection",

  // Boolean cell text
  booleanCellTrueLabel: "true",
  booleanCellFalseLabel: "false",

  // Used core components translation keys
  MuiTablePagination: {}
};
