export function insertAtCursor(myField, myValue) {
    if (document.selection) {
        //IE support
        myField.focus();
        let sel = document.selection.createRange();
        sel.text = myValue;
        sel.select();
    } else if (myField.selectionStart || myField.selectionStart == '0') {
        //MOZILLA/NETSCAPE support
        // 选中文本的前面起始位置
        let startPos = myField.selectionStart;
        let endPos = myField.selectionEnd;
        // 保存选中文本的前面部分和后面部分
        let beforeValue = myField.value.substring(0, startPos);
        let afterValue = myField.value.substring(endPos, myField.value.length);
        
        myField.value = beforeValue + myValue + afterValue;

        myField.selectionStart = startPos + myValue.length;
        myField.selectionEnd = startPos + myValue.length;
        myField.focus();
    } else {
        myField.value += myValue;
        myField.focus();
    }

    return myField.value
}