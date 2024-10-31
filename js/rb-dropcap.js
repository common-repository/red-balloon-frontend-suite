jQuery(document).ready(function() {

    let elems = jQuery('.rb-dropcap');
    elems.each(function(index) {
        let fullText = jQuery(this).text();
        let firstLetter = fullText.charAt(0);
        let remainingString = fullText.slice(1);
        let newString = `<span class="rb-dropcap">${firstLetter}</span>${remainingString}`;
        jQuery(this).html(newString);
    });
})