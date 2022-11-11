import * as React from 'react';
import { getTheme, mergeStyleSets, FontWeights, Modal, IconButton } from 'office-ui-fabric-react/lib';
export var MYModal = function (myprops) {
    var _a = React.useState(false), isModalOpen = _a[0], setIsOpen = _a[1];
    var _b = React.useState(true), isPopup = _b[0], setisPopup = _b[1];
    var _c = React.useState(''), name = _c[0], setname = _c[1];
    //const titleId = useId('title');
    React.useEffect(function () {
        setIsOpen(true);
    }, [isPopup]);
    function ExitHandler() {
        setIsOpen(false);
        setisPopup(function (current) { return !current; });
        myprops.handler();
    }
    return (React.createElement("div", null,
        React.createElement(Modal, { titleAriaId: 'title', isOpen: isModalOpen, onDismiss: ExitHandler, isBlocking: true, containerClassName: contentStyles.container },
            React.createElement("div", { className: contentStyles.header },
                React.createElement("span", { id: "title", style: { display: "flex", justifyContent: "center" } }, "Add Employee Details"),
                React.createElement(IconButton, { styles: iconButtonStyles, iconProps: cancelIcon, ariaLabel: "Close popup modal", onClick: ExitHandler })),
            React.createElement("div", { className: contentStyles.body },
                React.createElement("div", { className: 'row' },
                    React.createElement("div", { className: 'col-sm-12' },
                        React.createElement("div", { className: 'col-sm-6' },
                            React.createElement("label", null, "Name:"),
                            React.createElement("input", { type: 'text', placeholder: 'Enter Name' })),
                        React.createElement("div", { className: 'col-sm-6' },
                            React.createElement("label", null, "Email:"),
                            React.createElement("input", { type: 'text', placeholder: 'Enter Email' }))),
                    React.createElement("div", { className: 'col-sm-12' },
                        React.createElement("div", { className: 'col-sm-6' },
                            React.createElement("label", null, "Designation:"),
                            React.createElement("input", { type: 'text', placeholder: 'Enter Designation' })),
                        React.createElement("div", { className: 'col-sm-6' },
                            React.createElement("label", null, "Phone Number:"),
                            React.createElement("input", { type: 'text', placeholder: 'Enter Phone Number' })))),
                React.createElement("button", { type: 'button' }, "Save"),
                React.createElement("span", null, "  "),
                React.createElement("button", { onClick: ExitHandler }, "Cancel")))));
};
var cancelIcon = { iconName: 'Cancel' };
var theme = getTheme();
var contentStyles = mergeStyleSets({
    container: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'stretch',
        width: '68%',
    },
    header: [
        // eslint-disable-next-line deprecation/deprecation
        theme.fonts.xLarge,
        {
            flex: '1 1 auto',
            borderTop: '4px solid ${theme.palette.themePrimary}',
            color: theme.palette.neutralPrimary,
            display: 'flex',
            alignItems: 'center',
            fontWeight: FontWeights.semibold,
            padding: '12px 12px 14px 24px',
        },
    ],
    body: {
        flex: '4 4 auto',
        padding: '0 24px 24px 24px',
        overflowY: 'hidden',
        selectors: {
            p: { margin: '14px 0' },
            'p:first-child': { marginTop: 0 },
            'p:last-child': { marginBottom: 0 },
        },
    },
});
var stackProps = {
    horizontal: true,
    tokens: { childrenGap: 40 },
    styles: { root: { marginBottom: 20 } },
};
var iconButtonStyles = {
    root: {
        color: theme.palette.neutralPrimary,
        marginLeft: 'auto',
        marginTop: '4px',
        marginRight: '2px',
    },
    rootHovered: {
        color: theme.palette.neutralDark,
    },
};
//# sourceMappingURL=testpopup.js.map