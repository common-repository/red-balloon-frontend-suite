jQuery(document).ready(function() {

    // initialise arrays. One array of rbveq groups, one of their corresponding breakpoints
    var rbveq_elements = [];
    var rbveq_breakpoints = [];

    // select everything with rbveq
    let allElems = jQuery('.rbveq');

    // find .rbveq--* selectors from all .rbveq elements and add to array
    allElems.each(function(index) {
        var classList = jQuery(this).attr('class').split(/\s+/);
        classList.forEach(function(item, index) {

            if (item.startsWith('rbveq--')) {
                if (!rbveq_elements.includes(item)) {
                    rbveq_elements.push(item);

                    // check whether a breakpoint is specified for this group of elements
                    let breakpoint = 768;
                    let allGroup = jQuery(`.${item}`);
                    allGroup.each(function(index) {
                        var subClassList = jQuery(this).attr('class').split(/\s+/);
                        subClassList.forEach(function(item, index) {
                            if (item.startsWith('rbveq-breakpoint--')) {
                                var matches = item.match(/(\d+)/); 
                                if (matches) { 
                                    breakpoint = parseInt(matches[0]); 
                                } 
                            }
                        })
                    });
                    rbveq_breakpoints.push(breakpoint);
                }
            }
        });
    });


    // get viewport width
    const rb_viewport_width = jQuery(document).width();

    // set height of elements in rbveq group to height of tallest element
    rbveq_elements.forEach(setHeight);
    function setHeight(item, index) {

        if (rb_viewport_width >= rbveq_breakpoints[index]) {
            let rb_top_height = 0;
            jQuery(`.${rbveq_elements[index]}`).each(function(index) {
                let elem_height = jQuery(this).height();
                if (elem_height > rb_top_height) {
                    rb_top_height = elem_height;
                }   
            });
            jQuery(`.${rbveq_elements[index]}`).height(rb_top_height);
        }
    }
});
