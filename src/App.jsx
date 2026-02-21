import Desktop from "./components/Desktop/Desktop.jsx";
import CarouselStack from "./components/Carousel/CarouselStack.jsx";
import CoordinateOverlay from "./components/Debug/CoordinateOverlay.jsx";
import NewsletterPopup from "./components/NewsletterPopup.jsx";
import { useWindowManager } from "./context/WindowManager.jsx";

import GuestbookPopup from "./components/GuestbookPopup.jsx";

export default function App() {
  const { isSubscribePopupOpen, toggleSubscribePopup, isGuestbookOpen, toggleGuestbook } = useWindowManager();

  return (
    <div style={{ height: "100%", width: "100%", position: "relative" }}>
      <CoordinateOverlay />
      {/* Main Desktop Environment */}
      <Desktop />
      <CarouselStack />
      {isSubscribePopupOpen && (
        <NewsletterPopup onClose={() => toggleSubscribePopup(false)} />
      )}
      {isGuestbookOpen && (
        <GuestbookPopup onClose={() => toggleGuestbook(false)} />
      )}
    </div>
  );
}
