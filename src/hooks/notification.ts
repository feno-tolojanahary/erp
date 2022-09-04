import React from "react";
import { NOTIFICATION_TYPE, Store } from 'react-notifications-component';


export function useNotification() {

    const showNotif = (message: string, type: NOTIFICATION_TYPE) => {
        Store.addNotification({
            title: "Wonderful!",
            message,
            type,
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
        });
    }

    const showSuccess = (msg: string) => {
        showNotif(msg, "success");
    }

    const showError = (msg: string) => {
        showNotif(msg, "danger");
    }

    const showInfo = (msg: string) => {
        showNotif(msg, "info");
    }

    const showWarning = (msg: string) => {
        showNotif(msg, "warning");
    }

    return {
        showSuccess,
        showError,
        showInfo,
        showWarning
    }
}