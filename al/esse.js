// Function to get the size of an HTML element's content
function getElementContentSize(element) {
    const contentWidth = element.scrollWidth;
    const contentHeight = element.scrollHeight;
    return { width: contentWidth, height: contentHeight }; // size of its actual content
}

// Usage
const element = document.getElementById('content');
const contentSize = getElementContentSize(element);
console.log(`Content size - Width: ${contentSize.width}px, Height: ${contentSize.height}px`);
