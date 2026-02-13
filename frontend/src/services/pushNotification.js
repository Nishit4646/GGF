import { useEffect } from "react";
import { useApi } from "../hooks/useApi";

const VAPID_PUBLIC_KEY = import.meta.env.VITE_VAPID_PUBLIC_KEY;

export const usePushNotifications = () => {
  const { saveUserSubscription } = useApi(); // get the function

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registered");

        Notification.requestPermission().then((permission) => {
          if (permission !== "granted") return;
          subscribeUserToPush(registration, saveUserSubscription);
        });
      });
  }, []);
};

const subscribeUserToPush = async (registration, saveUserSubscription) => {
  try {
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
    });

    // Call backend function
    await saveUserSubscription(subscription);
    console.log("User subscription saved successfully!");
  } catch (error) {
    console.error("Error subscribing:", error);
  }
};

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const raw = atob(base64);
  return Uint8Array.from([...raw].map((ch) => ch.charCodeAt(0)));
}
