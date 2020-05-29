'use strict';

// Welcome one and all to late night hack city. Don't look at any this code. I'm warning you.


// const isWholeNumber = function(value) {
//     return value % 1 === 0;
// };

// const radiansFromDegrees = function(degrees) {
//     return degrees * (Math.PI / 180);
// };

const capitalizeString = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const toggleElementVisibility = function(element) {
    const elementName = element.classList[0];

    if (element.classList.contains(`${elementName}--hidden`)) {
        ListInLog(`Reveal ${capitalizeString(elementName)}`);

        element.classList.remove(`${elementName}--hidden`);
    } else {
        ListInLog(`Hide ${capitalizeString(elementName)}`);

        element.classList.add(`${elementName}--hidden`);
    }
};

const nav = document.querySelector('[data-nav]');

const grid = document.querySelector('[data-grid]');

const log = document.querySelector('[data-log]');
const logList = document.querySelector('[data-log-list]');

const cPanel = document.querySelector('[data-cpanel]');
const controls = document.querySelectorAll('[data-cpanel-control]');
const colorControls = document.querySelectorAll('[data-cpanel-color-control]');
const controlColumns = document.querySelector('[data-cpanel-columns]');
const controlRows = document.querySelector('[data-cpanel-rows]');
// const controlColumnGap = document.querySelector('[data-cpanel-column-gap]');
// const controlRowGap = document.querySelector('[data-cpanel-row-gap]');
// const controlStrokeWidth = document.querySelector('[data-cpanel-stroke-width]');
// const controlStrokeColour = document.querySelector('[data-cpanel-stroke-colour]');
// const controlStrokeOpacity = document.querySelector('[data-cpanel-stroke-opacity]');
// const controlBackgroundColour = document.querySelector('[data-cpanel-background-colour]');

let actions = [];
let trimmedActions = [];

let itemsLogged = 0;

//document.body.style.backgroundColor = controlBackgroundColour.value

const ListInLog = function(logMessage) {
    itemsLogged += 1;

    const logListItem = document.createElement('span');
    logListItem.classList.add('log__item');

    logListItem.textContent = `${itemsLogged}: ${logMessage}`;
    
    logList.appendChild(logListItem);
    logList.scrollTop = logList.scrollHeight;
};

const about = document.querySelector('[data-about]');

const menuToggleNav = document.querySelector('[data-menu-toggle-nav]');
const menuToggleCpanel = document.querySelector('[data-menu-toggle-cpanel]');
const menuToggleAbout = document.querySelector('[data-menu-toggle-about]');
const aboutX = document.querySelector('[data-about-x]');
const menuToggleLog = document.querySelector('[data-menu-toggle-log]');

const menuNew = document.querySelector('[data-menu-new]');
const menuExportAsPNG = document.querySelector('[data-menu-export-as-png]');

const menuStepBackward = document.querySelector('[data-menu-step-backward]');
const menuStepForward = document.querySelector('[data-menu-step-forward]');

const menuOpenBackgroundColourPicker = document.querySelector('[data-menu-open-background-colour-picker]');

const menuIncreaseStrokeWidth = document.querySelector('[data-menu-increase-stroke-width]');
const menuDecreaseStrokeWidth = document.querySelector('[data-menu-decrease-stroke-width]');
const menuOpenStrokeColourPicker = document.querySelector('[data-menu-open-stroke-colour-picker]');

const menuToggleCursor = document.querySelector('[data-menu-toggle-cursor]');

menuToggleNav.addEventListener('click', function() {
    toggleElementVisibility(nav);
});

menuToggleCpanel.addEventListener('click', function() {
    toggleElementVisibility(cPanel);
});

menuToggleAbout.addEventListener('click', function() {
    toggleElementVisibility(about);
});

aboutX.addEventListener('click', function() {
    toggleElementVisibility(about);
});

menuToggleLog.addEventListener('click', function() {
    toggleElementVisibility(log);
});

// const stepBackward = function() {
//     if (actions.length >= 1) {
//         trimmedActions.push(actions.pop());
//     }
// };

// const stepForward = function() {
//     if (trimmedActions.length >= 1) {
//         actions.push(trimmedActions.pop());
//     }
// };

// menuStepBackward.addEventListener('click', function() {
//     stepBackward();
// });

// menuStepForward.addEventListener('click', function() {
//      stepForward();
// });

// const downloadImage = function(data, filename, type) {
//    canvas.toBlob(function(blob) {
//        let link = document.createElement('a');
       
//        link.download = `grid${Date.now()}.png`;
//        link.href = URL.createObjectURL(blob);
//        link.click();

//        URL.revokeObjectURL(link.href)
//    }, 'image/png');
// };

// menuExportAsPNG.addEventListener('click', function() {
//     downloadImage();
// });

const openBackgroundColourPicker = function() {
    controlBackgroundColour.click()
};

menuOpenBackgroundColourPicker.addEventListener('click', function() {
    openBackgroundColourPicker();
});

const increaseStrokeWidth = function() {
    controlStrokeWidth.value++;
};

const decreaseStrokeWidth = function() {
    controlStrokeWidth.value--;
};

menuIncreaseStrokeWidth.addEventListener('click', function() {
    increaseStrokeWidth();
});

menuDecreaseStrokeWidth.addEventListener('click', function() {
    decreaseStrokeWidth();
});

const openStrokeColourPicker = function() {
    controlStrokeColour.click()
};

menuOpenStrokeColourPicker.addEventListener('click', function() {
    openStrokeColourPicker();
});

const toggleCursor = function() {
    if (document.body.classList.contains('cursor-hidden')) {
        document.body.classList.remove('cursor-hidden');
    } else {
        document.body.classList.add('cursor-hidden');
    }
};

menuToggleCursor.addEventListener('click', function() {
    toggleCursor();
});

// window.addEventListener('resize', () => {
//     setup();
// });

document.addEventListener('keydown', (event) => {
    ListInLog(`[${event.code}]`);

    if (event.code === 'Tab') {
        e.preventDefault();
    }

    if (event.code === 'Escape') {
        toggleElementVisibility(nav);
    }

    if (event.code === 'Slash') {
        toggleElementVisibility(about);
    }

    if (event.code === 'Backquote') {
        toggleElementVisibility(log);
    }

    if (event.code === 'Space') {
        toggleElementVisibility(cPanel);
    }

    if (event.code === 'KeyN') {
        actions = [];
        timmedActions = [];
    }

    if (event.code === 'KeyE') {
        downloadImage();
    }

    if (event.code === 'KeyZ') {
        stepBackward();
    }

    if (event.code === 'KeyX') {
        stepForward();
    }

    if (event.code === 'KeyB') {
        openBackgroundColourPicker();
    }

    if (event.code === 'BracketRight') {
        increaseStrokeWidth();

        ListInLog(`Increased Stroke Width to ${controlStrokeWidth.value}`);
    }

    if (event.code === 'BracketLeft') {
        decreaseStrokeWidth();

        ListInLog(`Decreased Stroke Width to ${controlStrokeWidth.value}`);
    }

    if (event.code === 'KeyC') {
        openStrokeColourPicker();
    }

    if (event.code === 'KeyH') {
        toggleCursor();
    }
});

const setup = function() {
    let gridItems = controlColumns.value * controlRows.value;

    for (let i = 0; i < gridItems; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid__item');
        grid.appendChild(gridItem);
    }

    controls.forEach(control => {
        const hash = control.dataset.hash || '';
        const unit = control.dataset.unit || '';
        const cssVarName = control.dataset.cpanelControl;

        document.documentElement.style.setProperty(`${cssVarName}`, hash + control.value + unit);
    });

    colorUpdate();
};

let lastGridItems = controlColumns.value * controlRows.value;

const handleControlChange = function(e) {
    console.log(e);

    let gridItems = controlColumns.value * controlRows.value;

    if (lastGridItems !== gridItems) {
        if (lastGridItems > gridItems) {
            const diff = lastGridItems - gridItems;

            for (let i = 0; i < diff; i++) {
                grid.removeChild(grid.firstChild);  
            }
        } else if (gridItems > lastGridItems) {
            const diff = gridItems - lastGridItems;

            for (let i = 0; i < diff; i++) {
                const gridItem = document.createElement('div');
                gridItem.classList.add('grid__item');
                grid.appendChild(gridItem);
            }
        }
    }

    const hash = this.dataset.hash || '';
    const unit = this.dataset.unit || '';
    const cssVarName = this.dataset.cpanelControl || this.dataset.cpanelMouseControl;

    document.documentElement.style.setProperty(`${cssVarName}`, this.value + unit);

    lastGridItems = gridItems;
};

const colorUpdate = function() {
    requestAnimationFrame(colorUpdate);

    colorControls.forEach(control => {
        const unit = control.dataset.unit || '';
        const cssVarName = control.dataset.cpanelColorControl;

        document.documentElement.style.setProperty(`${cssVarName}`, control.value + unit);
    });
}

controls.forEach(control => control.addEventListener('change', handleControlChange));

setup();
