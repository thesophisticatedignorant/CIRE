import { createContext, useContext, useState, useEffect } from "react";

const WindowManagerContext = createContext(null);

const getInitialWindows = () => {
  const width = typeof window !== "undefined" ? window.innerWidth : 1024;
  const height = typeof window !== "undefined" ? window.innerHeight : 768;
  const centerX = width / 2;
  const centerY = height / 2;
  const version = 5; // Increment to force re-render/reset

  return [
    {
      id: "archive",
      title: "Maison Overview",
      contentKey: "archive",
      x: centerX - 250, // Centered (was -241)
      y: 18,
      minimized: false,
      zIndex: 2,
      layoutVersion: version,
      graphiteMode: false,
      preGraphiteState: null,
    },
    {
      id: "video",
      title: "Transcendence of Man",
      contentKey: "video",
      x: centerX - 571,
      y: 69,
      minimized: false,
      zIndex: 1,
      layoutVersion: version,
      graphiteMode: false,
      preGraphiteState: null,
    },
    {
      id: "sophisticated-brilliance",
      title: "Sophisticated Brilliance",
      contentKey: "sophisticated-brilliance",
      x: centerX - 525, // Shifted -9px (was -516)
      y: 202,
      minimized: false,
      zIndex: 3,
      layoutVersion: version,
      graphiteMode: false,
      preGraphiteState: null,
    },
    {
      id: "sophisticated-ignorance",
      title: "Sophisticated Ignorance",
      contentKey: "sophisticated-ignorance",
      x: centerX - 66, // Shifted -9px (was -57)
      y: 285,
      minimized: false,
      zIndex: 4,
      layoutVersion: version,
      graphiteMode: false,
      preGraphiteState: null,
    },
    {
      id: "master",
      title: "Master",
      contentKey: "finder",
      x: 569,
      y: 234,
      minimized: false,
      zIndex: -99,
      layoutVersion: version,
      graphiteMode: false,
      preGraphiteState: null,
    },
  ];
};

export function WindowManagerProvider({ children }) {
  const [windows, setWindows] = useState(getInitialWindows());
  const [selectedFolder, setSelectedFolder] = useState('archive');

  useEffect(() => {
    let lastWidth = window.innerWidth;

    const handleResize = () => {
      const currentWidth = window.innerWidth;
      const deltaX = (currentWidth - lastWidth) / 2;

      setWindows((prev) =>
        prev.map((w) => ({
          ...w,
          x: w.x + deltaX,
          // If we had preGraphiteState, we should update that too so restoring works correctly
          preGraphiteState: w.preGraphiteState
            ? { ...w.preGraphiteState, x: w.preGraphiteState.x + deltaX }
            : null,
        }))
      );

      lastWidth = currentWidth;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const focusWindow = (id) => {
    setWindows((prev) => {
      const maxZ = Math.max(...prev.map((w) => w.zIndex));
      return prev.map((w) =>
        w.id === id ? { ...w, zIndex: maxZ + 1 } : w
      );
    });
  };

  const closeWindow = (id) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const toggleMinimize = (id) => {
    setWindows((prev) =>
      prev.map((w) => {
        if (w.id === id) {
          if (w.minimized) return w;
          return { ...w, minimized: true };
        }
        return w;
      })
    );
  };

  const restoreWindow = (id) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, minimized: false } : w))
    );
  };

  const toggleGraphiteMode = (id) => {
    console.log("Toggling graphite mode for:", id);
    setWindows((prev) => {
      const win = prev.find((w) => w.id === id);
      if (!win) {
        console.error("Window not found:", id);
        return prev;
      }

      if (win.graphiteMode) {
        console.log("Restoring from graphite mode. Pre-state:", win.preGraphiteState);
        if (!win.preGraphiteState) {
          console.error("No pre-graphite state found!");
          return prev.map(w => w.id === id ? { ...w, graphiteMode: false } : w);
        }
        // Restore from graphite mode
        return prev.map((w) => {
          if (w.id === id) {
            return {
              ...w,
              graphiteMode: false,
              x: w.preGraphiteState.x,
              y: w.preGraphiteState.y,
              // Removed width/height as we don't track them in state
            };
          }
          return w;
        });
      } else {
        console.log("Entering graphite mode. Current state:", { x: win.x, y: win.y });
        // Enter graphite mode
        return prev.map((w) => {
          if (w.id === id) {
            return {
              ...w,
              graphiteMode: true,
              preGraphiteState: { x: w.x, y: w.y }, // Store current position
              x: 0,
              y: 0,
              minimized: false, // Ensure it's visible
            };
          }
          return w;
        });
      }
    });
  };

  const updatePosition = (id, x, y) => {
    setWindows((prev) => {
      const movedWindow = prev.find((w) => w.id === id);
      if (!movedWindow) return prev;

      // If in graphite mode, don't allow moving? Or dragging exits graphite mode?
      // Usually maximizing disables dragging or dragging restores.
      // For now, let's just update. If CSS forces position, this state might get out of sync but that's okay.
      // Actually, if we are in graphite mode, we probably shouldn't be dragging.
      if (movedWindow.graphiteMode) return prev;

      const dx = x - movedWindow.x;
      const dy = y - movedWindow.y;

      return prev.map((w) => {
        if (w.id === id) {
          return { ...w, x, y };
        }
        // If part of the same group, move by delta
        if (movedWindow.groupId && w.groupId === movedWindow.groupId) {
          return { ...w, x: w.x + dx, y: w.y + dy };
        }
        return w;
      });
    });
  };

  const openWindow = (key) => {
    setWindows((prev) => {
      // Find by ID or contentKey
      const existing = prev.find((w) => w.id === key || w.contentKey === key);

      if (existing) {
        // Just focus it and ensure it's visible
        const maxZ = Math.max(...prev.map((w) => w.zIndex));
        return prev.map((w) =>
          w.id === existing.id ? { ...w, zIndex: maxZ + 1, minimized: false } : w
        );
      }

      // If not open, we need to find its initial config.
      // Try to find in initial config by ID or contentKey
      const initialConfig = getInitialWindows().find((w) => w.id === key || w.contentKey === key);

      if (initialConfig) {
        const maxZ = Math.max(...prev.map((w) => w.zIndex), 0);
        return [...prev, { ...initialConfig, zIndex: maxZ + 1 }];
      }
      return prev;
    });
  };

  const openFileWindow = (fileName, filePath) => {
    const fileId = `file-${fileName.replace(/[^a-zA-Z0-9]/g, '-')}`;

    setWindows((prev) => {
      // Check if this file window is already open
      const existing = prev.find((w) => w.id === fileId);

      if (existing) {
        // Just focus it
        const maxZ = Math.max(...prev.map((w) => w.zIndex));
        return prev.map((w) =>
          w.id === fileId ? { ...w, zIndex: maxZ + 1, minimized: false } : w
        );
      }

      // Create new file window
      const width = typeof window !== "undefined" ? window.innerWidth : 1024;
      const centerX = width / 2;
      const maxZ = Math.max(...prev.map((w) => w.zIndex), 0);

      return [...prev, {
        id: fileId,
        title: fileName,
        contentKey: 'file-viewer',
        fileData: { fileName, filePath },
        x: centerX - 150,
        y: 100,
        minimized: false,
        zIndex: maxZ + 1,
        layoutVersion: 5,
        graphiteMode: false,
        preGraphiteState: null,
      }];
    });
  };

  const bringToFront = (id) => {
    setWindows((prev) => {
      const maxZ = Math.max(...prev.map((w) => w.zIndex), 0);
      return prev.map((w) =>
        w.id === id ? { ...w, zIndex: maxZ + 1 } : w
      );
    });
  };

  const value = {
    windows,
    setWindows,
    toggleMinimize,
    restoreWindow,
    toggleGraphiteMode,
    openWindow,
    openFileWindow,
    closeWindow,
    bringToFront,
    updatePosition,
    selectedFolder,
    setSelectedFolder,
    openMasterWithFolder: (folderKey) => {
      setSelectedFolder(folderKey);
      // Open and focus the master window
      setWindows((prev) => {
        const existing = prev.find((w) => w.id === 'master');
        if (existing) {
          const maxZ = Math.max(...prev.map((w) => w.zIndex));
          return prev.map((w) =>
            w.id === 'master' ? { ...w, zIndex: maxZ + 1, minimized: false } : w
          );
        }
        const initialConfig = getInitialWindows().find((w) => w.id === 'master');
        if (initialConfig) {
          const maxZ = Math.max(...prev.map((w) => w.zIndex), 0);
          return [...prev, { ...initialConfig, zIndex: maxZ + 1, minimized: false }];
        }
        return prev;
      });
    },
  };

  return (
    <WindowManagerContext.Provider value={value}>
      {children}
    </WindowManagerContext.Provider>
  );
}

export function useWindowManager() {
  const ctx = useContext(WindowManagerContext);
  if (!ctx) {
    throw new Error("useWindowManager must be used inside WindowManagerProvider");
  }
  return ctx;
}
