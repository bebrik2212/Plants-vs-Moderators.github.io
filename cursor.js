(function() {
  
    const CURSOR_DEFAULT = 'курсор.png';
    const CURSOR_CLICK = 'курсор нажать.png';

    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        pointer-events: none;
        z-index: 999999;
        width: 32px;
        height: 32px;
        background-image: url('${CURSOR_DEFAULT}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        transform: translate(-50%, -50%);
        transition: transform 0.1s ease;
        cursor: none;
    `;
    document.body.appendChild(cursor);
    
    // Скрываем стандартный курсор на всей странице
    const style = document.createElement('style');
    style.textContent = `
        * {
            cursor: none !important;
        }
    `;
    document.head.appendChild(style);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mousedown', (e) => {
        cursor.style.backgroundImage = `url('${CURSOR_CLICK}')`;
        cursor.style.transform = 'translate(-50%, -50%) scale(0.9)';
    });
    
    document.addEventListener('mouseup', (e) => {
        cursor.style.backgroundImage = `url('${CURSOR_DEFAULT}')`;
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.display = 'none';
    });
    
    document.addEventListener('mouseenter', () => {
        cursor.style.display = 'block';
    });

    const clickableElements = 'a, button, input, select, textarea, [onclick], [role="button"], label';
    
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(clickableElements)) {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.1)';
            cursor.style.filter = 'brightness(1.2)';
        }
    });
    
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(clickableElements)) {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.filter = 'brightness(1)';
        }
    });
})();
