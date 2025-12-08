import Desktop from "./components/Desktop/Desktop.jsx";
import CarouselStack from "./components/Carousel/CarouselStack.jsx";
import CoordinateOverlay from "./components/Debug/CoordinateOverlay.jsx";

export default function App() {
  return (
    <div style={{ height: "100%", width: "100%", position: "relative" }}>
      <CoordinateOverlay />
      {/* Main Desktop Environment */}
      <Desktop />
      <CarouselStack />
    </div>
  );
}
