var __rest = (this && this.__rest) || function (s, e) {

    var t = {};

    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)

        t[p] = s[p];

    if (s != null && typeof Object.getOwnPropertySymbols === "function")

        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {

            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))

                t[p[i]] = s[p[i]];

        }

    return t;

};

import React from 'react';

import Button from '@material-ui/core/Button';

export default function ButtonComponent(_a) {

    var { children } = _a, rest = __rest(_a, ["children"]);

    return (React.createElement(Button, Object.assign({ className: "button" }, rest), children));

}

ButtonComponent.defaultProps = { onClick: () => { console.log("button pressed"); }, size: "medium", variant: "contained", color: "primary", children: "Button" };

