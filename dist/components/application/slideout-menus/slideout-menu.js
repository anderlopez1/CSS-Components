"use client";
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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Dialog as AriaDialog, DialogTrigger as AriaDialogTrigger, Modal as AriaModal, ModalOverlay as AriaModalOverlay } from "react-aria-components";
import { CloseButton } from "../../../components/base/buttons/close-button";
import { cx } from "../../../utils/cx";
export const ModalOverlay = (props) => {
    return (_jsx(AriaModalOverlay, Object.assign({}, props, { className: (state) => cx("fixed inset-0 flex min-h-dvh w-full items-center justify-end bg-overlay/70 pl-6 outline-hidden ease-linear md:pl-10", state.isEntering && "duration-300 animate-in fade-in", state.isExiting && "duration-500 animate-out fade-out", typeof props.className === "function" ? props.className(state) : props.className) })));
};
ModalOverlay.displayName = "ModalOverlay";
export const Modal = (props) => (_jsx(AriaModal, Object.assign({}, props, { className: (state) => cx("inset-y-0 right-0 h-full w-full max-w-100 shadow-xl transition", state.isEntering && "duration-300 animate-in slide-in-from-right", state.isExiting && "duration-500 animate-out slide-out-to-right", typeof props.className === "function" ? props.className(state) : props.className) })));
Modal.displayName = "Modal";
export const Dialog = (props) => (_jsx(AriaDialog, Object.assign({ role: "dialog", "aria-label": "Slideout menu" }, props, { className: cx("relative flex size-full flex-col items-start gap-6 overflow-y-auto bg-primary ring-1 ring-secondary_alt outline-hidden", props.className) })));
Dialog.displayName = "Dialog";
const Menu = (_a) => {
    var { children, dialogClassName } = _a, props = __rest(_a, ["children", "dialogClassName"]);
    return (_jsx(ModalOverlay, Object.assign({}, props, { children: _jsx(Modal, { className: (state) => cx(typeof props.className === "function" ? props.className(state) : props.className), children: (state) => (_jsx(Dialog, { className: dialogClassName, children: ({ close }) => {
                    return typeof children === "function" ? children(Object.assign(Object.assign({}, state), { close })) : children;
                } })) }) })));
};
Menu.displayName = "SlideoutMenu";
const Content = (_a) => {
    var { role = "main" } = _a, props = __rest(_a, ["role"]);
    return _jsx("div", Object.assign({ role: role }, props, { className: cx("flex size-full flex-col gap-6 overflow-y-auto overscroll-auto px-4 md:px-6", props.className) }));
};
Content.displayName = "SlideoutContent";
const Header = (_a) => {
    var { className, children, onClose } = _a, props = __rest(_a, ["className", "children", "onClose"]);
    return (_jsxs("header", Object.assign({}, props, { className: cx("relative z-1 w-full px-4 pt-6 md:px-6", className), children: [children, _jsx(CloseButton, { size: "sm", className: "absolute top-3 right-3 shrink-0", onClick: onClose })] })));
};
Header.displayName = "SlideoutHeader";
const Footer = (props) => {
    return _jsx("footer", Object.assign({}, props, { className: cx("w-full p-4 shadow-[inset_0px_1px_0px_0px] shadow-border-secondary md:px-6", props.className) }));
};
Footer.displayName = "SlideoutFooter";
const SlideoutMenu = Menu;
SlideoutMenu.displayName = "SlideoutMenu";
SlideoutMenu.Trigger = AriaDialogTrigger;
SlideoutMenu.Content = Content;
SlideoutMenu.Header = Header;
SlideoutMenu.Footer = Footer;
export { SlideoutMenu };
