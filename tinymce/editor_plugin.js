(function() {
    tinymce.create('tinymce.plugins.accordionPlugin', {
        init : function(ed, url) {
            var t = this;

            t.editor = ed;
            t.url = url;

            // Register commands.
            ed.addCommand('mceAccordion', function() {
                ed.windowManager.open({
                    file : url + '/accordion.htm',
                    width : 490 + parseInt(ed.getLang('accordion.delta_width', 0)),
                    height : 310 + parseInt(ed.getLang('accordion.delta_height', 0)),
                    inline : 1
                }, {
                    plugin_url : url
                });
            });
            // Register buttons.
            ed.addButton('accordion', {
                title : 'accordion.desc',
                image : url + '/img/icon.png',
                cmd : 'mceAccordion'});
        },
        getInfo : function() {
            return {
                longname :  'Accordion Plugin',
                author :    'Tõnis Tartes',
                authorurl : 'http://www.t6nis.com/',
                infourl :   'http://moodle.org',
                version :   '1.0'
            };
        }
    });

    tinymce.PluginManager.add('accordion', tinymce.plugins.accordionPlugin);
})();