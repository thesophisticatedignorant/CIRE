import React, { useState, useRef, useEffect } from 'react';
import { useWindowManager } from '../../context/WindowManager';

// Tag color mapping
const tagColors = {
    "CFDA Award Candidate": "green",
    "The Fashion Awards Candidate": "green",
    "International Woolmark Prize Candidate": "green",
    "JWA Candidate": "yellow",
    "GEM Award Candidate": "yellow",
    "Inhorgenta Award Candidate": "yellow"
};

const tagsList = [
    "CFDA Award Candidate",
    "GEM Award Candidate",
    "Inhorgenta Award Candidate",
    "International Woolmark Prize Candidate",
    "JWA Candidate",
    "The Fashion Awards Candidate"
];

export default function FinderWindow() {
    const { openWindow, openFileWindow, selectedFolder, setSelectedFolder } = useWindowManager();
    const [currentView, setCurrentView] = useState('icons');
    const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(0);
    const [viewMenuOpen, setViewMenuOpen] = useState(false);
    const [tagsDropdownOpen, setTagsDropdownOpen] = useState(false);
    const [fileTags, setFileTags] = useState({});
    const tagsInputRef = useRef(null);
    const tagsDropdownRef = useRef(null);

    // File mappings for each folder
    const filesByFolder = {
        archive: [
            { name: 'blackscale CIRE logo.png', type: 'image' },
            { name: 'maison overview.rtf', type: 'document' },
            { name: 'art house.png', type: 'image' },
            { name: 'fashion house.png', type: 'image' },
            { name: 'Maison Manifest', type: 'folder' },
        ],
        'sophisticated-brilliance': [
            { name: 'collection 1 teaser.mp4', type: 'video' },
            { name: 'Transcendence of Man', type: 'folder' },
        ],
        'sophisticated-ignorance': [
            { name: 'Power Perfected in Position', type: 'folder' },
        ],
        video: [
            { name: 'teaser.mp4', type: 'video' },
        ],
        'coming-soon': [],
        maison: [
            { name: 'Power Perfected in Position', type: 'folder' },
        ],
        curated: [],
        power: [
            { name: 'Power Perfected in Position.rfd', type: 'document' },
            { name: 'Foundations', type: 'folder' },
            { name: 'Fortifications', type: 'folder' },
            { name: 'Relics', type: 'folder' },
            { name: 'Dominion', type: 'folder' },
            { name: 'Adornments', type: 'folder' },
            { name: 'Crownworks', type: 'folder' },
        ],
        foundations: [
            { name: 'foundations.rfd', type: 'document' },
        ],
        fortifications: [
            { name: 'fortifications.rfd', type: 'document' },
        ],
        relics: [
            { name: 'relics.rfd', type: 'document' },
        ],
        dominion: [
            { name: 'dominion.rfd', type: 'document' },
        ],
        adornments: [
            { name: 'adornments.rfd', type: 'document' },
        ],
        crownworks: [
            { name: 'crownworks.rfd', type: 'document' },
        ],
    };

    // Map files to window actions
    const fileActions = {
        'maison overview.rtf': () => openWindow('archive'),
        'blackscale CIRE logo.png': () => openFileWindow('blackscale CIRE logo.png', '/blackscale CIRE logo.png'),
        'art house.png': () => openFileWindow('art house.png', '/art house.png'),
        'fashion house.png': () => openFileWindow('fashion house.png', '/fashion house.png'),
        'collection 1 teaser.mp4': () => openWindow('video'),
        'teaser.mp4': () => openWindow('video'),
        'Power Perfected in Position.rfd': () => openFileWindow('Power Perfected in Position.rfd', '/Power Perfected in Position.rfd'),
        'foundations.rfd': () => openFileWindow('foundations.rfd', '/foundations.rfd'),
        'fortifications.rfd': () => openFileWindow('fortifications.rfd', '/fortifications.rfd'),
        'relics.rfd': () => openFileWindow('relics.rfd', '/relics.rfd'),
        'dominion.rfd': () => openFileWindow('dominion.rfd', '/dominion.rfd'),
        'adornments.rfd': () => openFileWindow('adornments.rfd', '/adornments.rfd'),
        'crownworks.rfd': () => openFileWindow('crownworks.rfd', '/crownworks.rfd'),
        // Folder navigation
        'Maison Manifest': () => setSelectedFolder('maison'),
        'Transcendence of Man': () => setSelectedFolder('video'),
        'Power Perfected in Position': () => setSelectedFolder('power'),
        'Foundations': () => setSelectedFolder('foundations'),
        'Fortifications': () => setSelectedFolder('fortifications'),
        'Relics': () => setSelectedFolder('relics'),
        'Dominion': () => setSelectedFolder('dominion'),
        'Adornments': () => setSelectedFolder('adornments'),
        'Crownworks': () => setSelectedFolder('crownworks'),
    };

    const handleFileClick = (fileName) => {
        const action = fileActions[fileName];
        if (action) {
            action();
        } else {
            openFileWindow(fileName, `/${fileName}`);
        }
    };

    const folders = [
        { label: 'Macintosh HD', key: 'macintosh-hd', icon: 'fa-desktop', count: 0 },
        { label: 'CIRE', key: 'archive', count: filesByFolder.archive?.length || 0 },
        { label: 'Sophisticated Brilliance', key: 'sophisticated-brilliance', count: filesByFolder['sophisticated-brilliance']?.length || 0 },
        { label: 'Sophisticated Ignorance', key: 'sophisticated-ignorance', count: filesByFolder['sophisticated-ignorance']?.length || 0 },
        { label: '*COMING SOON*', key: 'coming-soon', count: 0 },
        { label: 'Curated Content', key: 'curated', count: 0 },
    ];

    const files = filesByFolder[selectedFolder] || [];
    const selectedFile = files[selectedGalleryIndex] || files[0];

    const getFileIcon = (type) => {
        if (type === 'folder') return { class: 'fas fa-folder', color: '#5ac8fa' };
        if (type === 'image') return { class: 'far fa-image', color: '#30d158' };
        if (type === 'video') return { class: 'fas fa-film', color: '#ff375f' };
        return { class: 'far fa-file-alt', color: '#aaa' };
    };

    // Handle tags dropdown positioning
    const handleTagsInputClick = (e) => {
        e.stopPropagation();
        if (tagsInputRef.current && tagsDropdownRef.current) {
            const rect = tagsInputRef.current.getBoundingClientRect();
            tagsDropdownRef.current.style.left = rect.left + 'px';
            tagsDropdownRef.current.style.top = (rect.bottom + 4) + 'px';
            document.body.appendChild(tagsDropdownRef.current);
        }
        setTagsDropdownOpen(!tagsDropdownOpen);
    };

    const handleTagSelect = (tag) => {
        if (selectedFile) {
            const fileKey = selectedFile.name;
            const currentTags = fileTags[fileKey] || [];
            if (!currentTags.includes(tag)) {
                setFileTags({
                    ...fileTags,
                    [fileKey]: [...currentTags, tag]
                });
            }
        }
        setTagsDropdownOpen(false);
    };

    const handleTagRemove = (tag) => {
        if (selectedFile) {
            const fileKey = selectedFile.name;
            const currentTags = fileTags[fileKey] || [];
            setFileTags({
                ...fileTags,
                [fileKey]: currentTags.filter(t => t !== tag)
            });
        }
    };

    // Close dropdowns on outside click
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!e.target.closest('.finder-tags-wrapper')) {
                setTagsDropdownOpen(false);
            }
            if (!e.target.closest('.finder-toolbar-button')) {
                setViewMenuOpen(false);
            }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, []);

    const selectedFileTags = selectedFile ? (fileTags[selectedFile.name] || []) : [];

    const renderGalleryView = () => {
        const icon = selectedFile ? getFileIcon(selectedFile.type) : { class: 'far fa-file', color: '#aaa' };
        const fileTypeLabel = selectedFile ? (selectedFile.type === 'image' ? 'PNG image' : selectedFile.type === 'video' ? 'MP4 video' : 'Document') : '';

        return (
            <div className="finder-gallery-view">
                <div className="finder-gallery-main">
                    <div className="finder-gallery-preview">
                        <div className="finder-gallery-preview-content">
                            <i className={icon.class} style={{ color: icon.color }}></i>
                        </div>
                    </div>
                    <div className="finder-gallery-info">
                        <div className="finder-gallery-info-header">
                            <i className={icon.class} style={{ color: icon.color }}></i>
                            <div>
                                <div className="finder-gallery-info-name">{selectedFile?.name || 'No file selected'}</div>
                                <div className="finder-gallery-info-type">{fileTypeLabel}{selectedFile ? ' - 256 KB' : ''}</div>
                            </div>
                        </div>
                        <div className="finder-gallery-info-section">
                            <div className="finder-gallery-info-section-title">
                                Information
                                <span className="show-more">Show More</span>
                            </div>
                            <div className="finder-gallery-info-row">
                                <span className="label">Created</span>
                                <span className="value">Dec 7, 2025 at 23:57</span>
                            </div>
                            <div className="finder-gallery-info-row">
                                <span className="label">Modified</span>
                                <span className="value">Dec 7, 2025 at 23:57</span>
                            </div>
                        </div>
                        <div className="finder-gallery-info-section">
                            <div className="finder-gallery-info-section-title">Tags</div>
                            <div className="finder-tags-wrapper">
                                <div className="finder-chosen-tags">
                                    {selectedFileTags.map(tag => (
                                        <div key={tag} className="finder-tag-chip">
                                            {tag} <i className="fas fa-times" onClick={() => handleTagRemove(tag)}></i>
                                        </div>
                                    ))}
                                </div>
                                <input
                                    ref={tagsInputRef}
                                    type="text"
                                    className={`finder-tags-input ${tagsDropdownOpen ? 'active' : ''}`}
                                    placeholder="Add Tags..."
                                    readOnly
                                    onClick={handleTagsInputClick}
                                />
                            </div>
                        </div>
                        <div className="finder-gallery-actions">
                            <div className="finder-gallery-action-btn">
                                <i className="fas fa-undo"></i>
                                <span>Rotate Left</span>
                            </div>
                            <div className="finder-gallery-action-btn">
                                <i className="fas fa-marker"></i>
                                <span>Markup</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="finder-gallery-thumbnails">
                    {files.map((file, index) => {
                        const thumbIcon = getFileIcon(file.type);
                        return (
                            <div
                                key={index}
                                className={`finder-gallery-thumbnail ${index === selectedGalleryIndex ? 'selected' : ''}`}
                                onClick={() => setSelectedGalleryIndex(index)}
                            >
                                <i className={thumbIcon.class} style={{ color: thumbIcon.color }}></i>
                            </div>
                        );
                    })}
                </div>
                {/* Tags Dropdown - rendered in body via portal effect */}
                <div
                    ref={tagsDropdownRef}
                    className={`finder-tags-dropdown ${tagsDropdownOpen ? 'show' : ''}`}
                >
                    {tagsList.map(tag => (
                        <div
                            key={tag}
                            className="finder-tag-option"
                            onClick={(e) => { e.stopPropagation(); handleTagSelect(tag); }}
                        >
                            <div className={`finder-tag-circle ${tagColors[tag] || 'gray'}`}></div>
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const renderIconsView = () => (
        <div className="finder-file-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '10px' }}>
            {files.map((file, index) => {
                const icon = getFileIcon(file.type);
                return (
                    <div
                        key={index}
                        className="finder-file-item"
                        style={{ flexDirection: 'column', textAlign: 'center', padding: '10px' }}
                        onClick={() => handleFileClick(file.name)}
                    >
                        <i className={icon.class} style={{ fontSize: '32px', color: icon.color, marginBottom: '8px' }}></i>
                        <span className="finder-file-name" style={{ fontSize: '11px' }}>{file.name}</span>
                    </div>
                );
            })}
        </div>
    );

    const renderListView = () => (
        <div className="finder-file-list">
            {files.map((file, index) => {
                const icon = getFileIcon(file.type);
                return (
                    <div
                        key={index}
                        className="finder-file-item"
                        onClick={() => handleFileClick(file.name)}
                    >
                        <i className={icon.class} style={{ color: icon.color }}></i>
                        <span className="finder-file-name">{file.name}</span>
                    </div>
                );
            })}
        </div>
    );

    return (
        <div className="finder-window-new">
            {/* Toolbar */}
            <div className="finder-toolbar">
                <div className="finder-toolbar-button" onClick={(e) => { e.stopPropagation(); setViewMenuOpen(!viewMenuOpen); }}>
                    <i className={`fas ${currentView === 'gallery' ? 'fa-images' : currentView === 'list' ? 'fa-th-list' : 'fa-th-large'}`}></i>
                    {currentView.charAt(0).toUpperCase() + currentView.slice(1)}
                    <div className={`finder-view-menu ${viewMenuOpen ? 'show' : ''}`}>
                        <div className={`finder-view-menu-item ${currentView === 'icons' ? 'selected' : ''}`} onClick={() => { setCurrentView('icons'); setViewMenuOpen(false); }}>
                            <i className="fas fa-th-large"></i> Icons
                        </div>
                        <div className={`finder-view-menu-item ${currentView === 'list' ? 'selected' : ''}`} onClick={() => { setCurrentView('list'); setViewMenuOpen(false); }}>
                            <i className="fas fa-th-list"></i> List
                        </div>
                        <div className={`finder-view-menu-item ${currentView === 'gallery' ? 'selected' : ''}`} onClick={() => { setCurrentView('gallery'); setViewMenuOpen(false); }}>
                            <i className="fas fa-images"></i> Gallery
                        </div>
                    </div>
                </div>
                <div className="finder-toolbar-button">
                    <i className="fas fa-share-alt"></i> Share
                </div>
                <div className="finder-toolbar-button">
                    <i className="fas fa-tag"></i> Tags
                </div>
            </div>

            {/* Main Content Area */}
            <div className="finder-content">
                {/* Sidebar */}
                <div className="finder-sidebar">
                    <div style={{ padding: '0 12px 5px', fontSize: '11px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Favorites</div>
                    {folders.map((folder) => (
                        <div
                            key={folder.key}
                            className={`finder-sidebar-item ${selectedFolder === folder.key ? 'active' : ''}`}
                            onClick={() => setSelectedFolder(folder.key)}
                        >
                            <i className={`fas ${folder.icon || 'fa-folder'}`} style={{ color: folder.icon ? '#aaa' : '#5ac8fa', width: '16px', textAlign: 'center' }}></i>
                            <span className="finder-folder-name">{folder.label}</span>
                            {folder.count > 0 && <span className="finder-count-badge">{folder.count}</span>}
                        </div>
                    ))}
                </div>

                {/* File View */}
                {currentView === 'gallery' ? renderGalleryView() : currentView === 'list' ? renderListView() : renderIconsView()}
            </div>
        </div>
    );
}
