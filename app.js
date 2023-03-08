if(!localStorage.getItem('markedito')) {
    localStorage.setItem('markedito', '# Markedito\n**Welcome to Markedito!**\n## How to edit?\nYou can edit by changing the text on the left!')
}

function updatePreview() {
    var markdownText = document.getElementById("markdown").value;
    var htmlText = markdownToHtml(markdownText);
    document.getElementById("preview").innerHTML = htmlText;
}

function markdownToHtml(markdownText) {
    var md = window.markdownit();
    return md.render(markdownText);
}

function insertText(text) {
    var textarea = document.getElementById("markdown");
    var start = textarea.selectionStart;
    var end = textarea.selectionEnd;
    var before = textarea.value.substring(0, start);
    var after = textarea.value.substring(end);
    textarea.value = before + text + after;
    textarea.selectionStart = textarea.selectionEnd = start + text.length;
    textarea.focus();
    updatePreview();
}