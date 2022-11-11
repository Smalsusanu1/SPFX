import * as React from "react";
import { useEffect, useState } from "react";
import useDebounce from "../getdatahere/src/webparts/gettingdata/hooks/useDebounce";
export default function SearchInput(props) {
    var _a = useState(), searchQuery = _a[0], setSearchQuery = _a[1];
    var onChangeSearchQuery = props.onChangeSearchQuery;
    var debouncedSearchQuery = useDebounce(searchQuery, 250);
    useEffect(function () {
        if (debouncedSearchQuery !== undefined) {
            onChangeSearchQuery(debouncedSearchQuery);
        }
    }, [debouncedSearchQuery, onChangeSearchQuery]);
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { htmlFor: "search", className: "mt-3" }, "Search! Try me! (I work!)"),
        React.createElement("input", { id: "search", className: "form-control full-width", type: "search", placeholder: "Search...", "aria-label": "Search", onChange: function (event) { return setSearchQuery(event.target.value); } })));
}
//# sourceMappingURL=searchInput.js.map