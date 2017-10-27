(function ($) {
    'use strict';
$(document).ready(function(){
    // Functions
/*    function setTabIndex(){
        if ($('#accessible-menu ul[aria-expanded=false]').find().hasClass('accessibly-hidden')){
            $(this).find('li').attr('tabindex','-1');
        }
    };*/
    var
        $menu = $('#accessible-menu'),
        $trigger = $('#accessible-menu-button'),
        //$submenubutton = $('.sub-menu-button'),
        $menuText = $('#accessible-menu-button-text')
        ;


    function accessibleMenuToggle() {
        if ($(this).hasClass('toggled')) {
            $(this).removeClass('toggled');
            $menu.addClass('accessibly-hidden');
            $menu.attr('aria-expanded', 'false');
            $menu.find('ul').first().addClass('accessibly-hidden').attr('aria-expanded', 'false');
            $menuText.html('Open accessibility menu');
            $(this).html('=');
        }
        else {
            $(this).addClass('toggled');
            $menu.removeClass('accessibly-hidden');
            $menu.attr('aria-expanded', 'true');
            $menu.find('ul').first().removeClass('accessibly-hidden').attr('aria-expanded', 'true');
            $menuText.html('Close accessibility menu');
            $(this).html('X');
        }
        setTabIndex();
    };

    function subMenuToggle() {
        if ($(this).hasClass('toggled')) {
            $(this).removeClass('toggled');
            $(this).next('.sub-menu').addClass('accessibly-hidden');
            $(this).next('.sub-menu').attr('aria-expanded', 'false');
            $(this).html('+');
        }
        else {
            $(this).addClass('toggled');
            $(this).next('.sub-menu').removeClass('accessibly-hidden');
            $(this).next('.sub-menu').attr('aria-expanded', 'true');
            $(this).html('-');

        }
        setTabIndex();
    };

    function setTabIndex() {
        $menu.find('ul').each(function() {
            if ($(this).attr('aria-expanded') == 'false') {
                $(this).find('li').each(function () {
                    $(this).attr('tabindex', '-1');
                });
            }

           else if ($(this).attr('aria-expanded') == 'true') {
                $(this).find('li').each(function () {
                    $(this).attr('tabindex', '0');
                });
            }

            else {
                $(this).find('li').each(function () {
                    $(this).attr('tabindex', 'unset');
                });
            }
        });
    };

    function setAria(){
        $menu.find('ul').each(function(){
            $(this).attr('aria-expanded', 'false').attr('role', 'menubar').addClass('accessibly-hidden');
        });
        $menu.find('li').each(function(){
            $(this).attr('role', 'menuitem');
        });
        $menu.find('li > ul').each(function(){
            $(this).parent('li').attr('haspopup', 'true').addClass('has-submenu');
            $(this).attr('aria-expanded', 'false').attr('role', 'menu').addClass('sub-menu');

        });
        $menu.find('li > button').each(function(){
            $(this).addClass('sub-menu-button');
        });
    };


// Load shit
    //setTabIndex();

    setAria();
    setTabIndex();

    // Click handlers
    $trigger.click(accessibleMenuToggle);
    $('.sub-menu-button').click(subMenuToggle);
});

})(jQuery);