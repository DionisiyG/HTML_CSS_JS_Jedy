$(function() {
    $.scrollify({

        // section should be an identifier that is the same for each section
        // A selector for the sections.
        section: ".scroll",

        // Scrollify lets you define a hash value for each section.
        // This makes it possible to permalink to particular sections.
        // This is set as a data attribute on the sections.
        // The name of the data attribute is defined by 'sectionName'.
        sectionName: "section-name",

        // A CSS selector for non-full-height sections, such as a header and footer.
        interstitialSection: "",

        // Define the easing method.
        easing: "easeOutExpo",

        // Scrolling speed in milliseonds
        scrollSpeed: 1100,

        // A distance in pixels to offset each sections position by.
        offset : 0,

        // A boolean to define whether scroll bars are visible or not.
        scrollbars: true,

        // Target container
        target:"html,body",

        // A string of selectors for elements that require standard scrolling behaviour.
        standardScrollElements: false,

        // A boolean to define whether Scollify assigns a height to the sections.
        setHeights: false,

        // Allows scrolling over overflowing content within sections
        overflowScroll:true,

        // Updates the browser location hash when scrolling through sections
        updateHash: true,

        // Allows to handle touch scroll events
        touchScroll:true,

        // callbacks
        before:function() {},
        after:function() {},
        afterResize:function() {},
        afterRender:function() {}

    });
});