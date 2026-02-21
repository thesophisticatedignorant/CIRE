import React, { useState } from "react";
import { useWindowManager } from "../../context/WindowManager";
import Window from "../Window/Window";
import Folder from "../Folder/Folder";
import ArchiveWindow from "../windows/ArchiveWindow";
import VideoWindow from "../windows/VideoWindow";
import FinderWindow from "../windows/FinderWindow";
import SophisticatedBrillianceWindow from "../windows/SophisticatedBrillianceWindow";
import SophisticatedIgnoranceWindow from "../windows/SophisticatedIgnoranceWindow";
import FileViewerWindow from "../windows/FileViewerWindow";

const windowContentMap = {
  archive: ArchiveWindow,
  video: VideoWindow,
  "sophisticated-brilliance": SophisticatedBrillianceWindow,
  "sophisticated-ignorance": SophisticatedIgnoranceWindow,
  finder: FinderWindow,
  "file-viewer": FileViewerWindow,
};

export default function Desktop() {
  const { windows, restoreWindow, toggleGraphiteMode, openWindow, closeWindow, toggleMinimize, updatePosition, bringToFront, openMasterWithFolder, toggleGuestbook } = useWindowManager();

  return (
    <div className="desktop">
      {/* Light Switch Toggle */}
      <div
        style={{
          position: "absolute",
          left: "1274px",
          top: "47px",
          zIndex: 606,
        }}
      >
        <label className="toggle-switch">
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked) {
                document.body.classList.add("light-mode");
              } else {
                document.body.classList.remove("light-mode");
              }
            }}
          />
          <span className="toggle-slider"></span>
        </label>
      </div>

      {/* Master Folder */}
      <Folder
        x={971}
        y={171}
        label="MASTER"
        color="red"
        isDraggable={true}
        style={{ zIndex: 303 }}
        onClick={() => openWindow("master")}
      />

      {/* Scattered Folders */}
      <Folder x="calc(max(50vw, 750px) - 636px)" y="27px" label="CIRE" onClick={() => openMasterWithFolder("archive")} />
      <Folder x="calc(max(50vw, 750px) - 689px)" y="113px" label="Sophisticated Brilliance" onClick={() => openMasterWithFolder("sophisticated-brilliance")} />
      <Folder x="calc(max(50vw, 750px) - 571px)" y="95px" label="Sophisticated Ignorance" onClick={() => openMasterWithFolder("sophisticated-ignorance")} />
      <Folder x="calc(max(50vw, 750px) - 539px)" y="204px" label="*COMING SOON*" onClick={() => openMasterWithFolder("coming-soon")} />
      <Folder x="calc(max(50vw, 750px) - 582px)" y="332px" label="Curated Content" onClick={() => openMasterWithFolder("curated")} />

      {/* Guestbook Trigger */}
      <Folder x="calc(max(50vw, 750px) - 480px)" y="332px" label="Guestbook" onClick={() => toggleGuestbook(true)} />

      {windows.map((win) => {
        const Content = windowContentMap[win.contentKey] || (() => null);

        return (
          <Window
            key={win.id}
            id={win.id}
            title={win.title}
            x={win.x}
            y={win.y}
            zIndex={win.zIndex}
            minimized={win.minimized}
            onRestore={restoreWindow}
            onToggleGraphiteMode={toggleGraphiteMode}
            onClose={closeWindow}
            onToggleMinimize={toggleMinimize}
            onDragStop={updatePosition}
            onFocus={bringToFront}
            graphiteMode={win.graphiteMode}
          >
            {win.contentKey === 'file-viewer' && win.fileData ? (
              <Content fileName={win.fileData.fileName} filePath={win.fileData.filePath} />
            ) : (
              <Content />
            )}
          </Window>
        );
      })}
    </div>
  );
}
