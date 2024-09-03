function copyPaste() {
    var clipboard = new ClipboardJS('#copyemail');
    clipboard.on('success', function (_e) {
        // Change button text to "Copied"
        $('#copyemail').text('Email Copied');

        // Reset button text to "Copy" after 2 seconds
        setTimeout(function () {
            $('#copyemail').text('williembonavente@iskolarngbayan.pup.edu.ph');
        }, 2000);
    });
};

copyPaste();