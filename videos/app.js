'use strict';
var VideoGrid = angular.module('VideoGallery', ['ngSanitize','videoPlayer']);

VideoGrid.controller('VideoGrid', function($scope, $http){
    $http.get ("../global/xml/sitemap.xml").success (getSitemapSuccess)

    function getSitemapSuccess (xml) {
        var json = $.xml2json(xml,true);
        filterSitemap(json)
    }

    function filterSitemap(json) {
        $scope.videos = $scope.data.filter(function(video, videoIndex) {
            var moduleMatch = json.module.filter(function(module) {
                if (video.location) {
                    return module.mID === video.location.module
                }
            })
            var lessonMatch = false;

            if (moduleMatch.length) {
                lessonMatch = moduleMatch[0].lesson.filter(function(lesson) {

                    console.log(lesson.num)
                    if (video.location) {
                        return lesson.num === video.location.lesson
                    }
                });
            }

            if (lessonMatch.length) {
                return video
            }
        });
        console.log($scope.videos);
    }

    $scope.data = [
        {
            title: 'Office - How to Create an Office Account',
            thumb: '../module02/lesson01/media/creatingaccount.png',
            keywords: 'office, create, account, setup',
            description: 'Learn how to create a free Microsoft Office Online Account. ',
            textversion: '../module02/lesson01/textversion/creatingaccount_txta.htm',
            target: '0',
            entryID: '1_pvyoq9vn',
            location: {
                module: '02',
                lesson: '02.01'
            }
        },
        {
            title: 'Office - Creating New Folders',
            thumb: '../module02/lesson01/media/creatingfolder.png',
            keywords: 'organize, create, folder',
            description: 'To make the most of your online workplace, it is important to be organized. One way to do this is to create folders to house your documents.',
            textversion: '../module02/lesson01/textversion/02_01_05/textversion_01.htm',
            target: '1',
            entryID: '1_usgdbax5',
            location: {
                module: '02',
                lesson: '02.01'
            }
        },
        {
            title: 'Office - Uploading Existing Documents',
            thumb: '../module02/lesson01/media/uploadingfile.png',
            keywords: 'upload, uploading, documents, office, online',
            description: 'If you have existing documents, you can upload these to your OneDrive.',
            textversion: '../module02/lesson01/textversion/02_01_05/textversion_02.htm',
            target: '2',
            entryID: '1_lib22n5t',
            location: {
                module: '02',
                lesson: '02.01'
            }
        },
        {
            title: 'Office - How to Create an Email Signature Line',
            thumb: '../module02/lesson02/media/emailsignature.png',
            keywords: 'create, email, signature, outlook',
            description: 'Learn how to create an email signature in Outlook.',
            textversion: '../module02/lesson02/textversion/02_02_03/textversion01.htm',
            target: '3',
            entryID: '1_2e6cmvri',
            location: {
                module: '02',
                lesson: '02.02'
            }
        },
        {
            title: 'Office - How to Add Attachments',
            thumb: '../module02/lesson02/media/addattachments.png',
            keywords:'attach, attachments, outlook, email',
            description: 'You can also attach a variety of things (almost anything saved to your computer) to your email message',
            textversion: '../module02/lesson02/textversion/02_02_03/textversion02.htm',
            target: '4',
            entryID: '1_26js3gfy',
            location: {
                module: '02',
                lesson: '02.02'
            }
        },
        {
            title: 'Office - Let Me Check My Calendar',
            thumb: '../module02/lesson02/media/creatingevent.png',
            keywords:'outlook, online, events, meetings, request, calendar',
            description: 'Here is how you can create meeting and events in the calendar.',
            textversion: '../module02/lesson02/textversion/02_02_05/textversion_01.htm',
            target: '5',
            entryID: '1_iin3j24a',
            location: {
                module: '02',
                lesson: '02.02'
            }
        },
        {
            title: 'Word - Creating a List',
            thumb: '../module02/lesson03/media/lists1.png',
            keywords:'word, lists, numbered, bulletted, formatting',
            description: 'learn to create a numbered list and practice your formatting skills.',
            textversion: '../module02/lesson03/textversion/02_03_08/textversion_01.htm',
            target: '6',
            entryID: '1_4aouwczu',
            location: {
                module: '02',
                lesson: '02.03'
            }
        },
        {
            title: 'Word - Spacing in Word',
            thumb: '../module02/lesson03/media/spacing1.png',
            keywords: 'word, spacing, formatting, line, settings, paragraph, indent',
            description: 'Lets go over how to modify paragraph and line settings.',
            textversion: '../module02/lesson03/textversion/02_03_09/textversion_01.htm',
            target: '7',
            entryID: '1_0q41uuy1',
            location: {
                module: '02',
                lesson: '02.03'
            }
        },
        {
            title: 'Word - Headers and Footers',
            thumb: '../module02/lesson04/media/headerfooter.png',
            keywords: 'word, headers, footers, top, bottom',
            description: 'Watch this video to learn how to use the Header & Footer tool',
            textversion: '../module02/lesson04/textversion/02_04_05/textversion_02.htm',
            target: '8',
            entryID: '1_4oi7g4rd',
            location: {
                module: '02',
                lesson: '02.04'
            }
        },
        {
            title: 'Word - Hyperlinks',
            thumb: '../module02/lesson04/media/hyperlink.png',
            keywords: 'word, hyperlinks, links, page, web, website',
            description: 'Hyperlinks give words, phrases, or images the ability to open a new page when selected.',
            textversion: '../module02/lesson04/textversion/02_04_05/textversion_hl.htm',
            target: '9',
            entryID: '1_o0qnusre',
            location: {
                module: '02',
                lesson: '02.04'
            }
        },
        {
            title: 'Word - Basic Tables',
            thumb: '../module02/lesson04/media/basictable.png',
            keywords: 'word, basic, tables, create, data, organize',
            description: 'Watch this Creating a Basic Table video to see how to create a table.',
            textversion: '../module02/lesson04/textversion/02_04_05/textversion_03.htm',
            target: '10',
            entryID: '1_jvt0h5fy',
            location: {
                module: '02',
                lesson: '02.04'
            }
        },
         {
            title: 'Word - Formatting Tables',
            thumb: '../module02/lesson04/media/tableformatting.png',
            keywords: 'word, basic, tables, format, data, organize, design, layout',
            description: 'Watch this Table Formatting video to see how to format a table.',
            textversion: '../module02/lesson04/textversion/02_04_05/textversion_04.htm',
            target: '11',
             entryID: '1_4ny5yg0s',
             location: {
                 module: '02',
                 lesson: '02.04'
             }
        },
        {
            title: 'Excel - Formatting Data in Excel',
            thumb: '../module04/lesson01/media/formatcell.png',
            keywords: 'excel, cells, format, data, spreadsheet, layout',
            description: 'Watch this Formatting Data in Excel video to see how to format the cells of your spreadsheet.',
            textversion: '../module04/lesson01/textversion/04_01_05/textversion_01.htm',
            target: '12',
            entryID: '1_3rrq0z7x',
            location: {
                module: '04',
                lesson: '04.01'
            }
        },
         {
            title: 'Excel - Merging Cells',
            thumb: '../module04/lesson01/media/merge.png',
            keywords: 'excel, cells, format, data, spreadsheet, merge',
            description: 'Watch this Merging Cells video to learn how to merge cells in a spreadsheet.',
            textversion: '../module04/lesson01/textversion/04_01_06/textversion_01.htm',
            target: '13',
             entryID: '1_xg50kja2',
             location: {
                 module: '04',
                 lesson: '04.01'
             }
        },
        {
            title: 'Excel - Fill Data',
            thumb: '../module04/lesson01/media/filldata.png',
            keywords: 'excel, cells, format, data, spreadsheet, autofill',
            description: 'Watch this Fill Data video to learn how use the Fill Handle for quickly auto-filling data.',
            textversion: '../module04/lesson01/textversion/04_01_07/textversion_01.htm',
            target: '14',
            entryID: '1_3rrq0z7x',
            location: {
                module: '04',
                lesson: '04.01'
            }
        },
        {
            title: 'Excel - Functions',
            thumb: '../module04/lesson02/media/function.png',
            keywords: 'excel, cells, function, data, spreadsheet',
            description: 'Watch the Functions video to see how to insert a function in a cell.',
            textversion: '../module04/lesson02/textversion/04_02_04/textversion_01.htm',
            target: '15',
            entryID: '1_jd8lkg0e',
            location: {
                module: '04',
                lesson: '04.02'
            }
        },
        {
            title: 'Excel - Logical Functions',
            thumb: '../module04/lesson02/media/logical.png',
            keywords: 'excel, cells, function, data, spreadsheet, logical',
            description: 'Watch the Logical Functions video to learn how to create a logical function (also called a conditional formula) using data in a worksheet.',
            textversion: '../module04/lesson02/textversion/04_02_05/textversion_01.htm',
            target: '16',
            entryID: '1_cup512zq',
            location: {
                module: '04',
                lesson: '04.02'
            }
        },
        {
            title: 'Excel - Pie Chart',
            thumb: '../module04/lesson03/media/chart_pie.png',
            keywords: 'excel, cells, pie, chart, data, spreadsheet',
            description: 'The Pie Chart video explains how to turn your data into a visually-appealing and purposeful chart.',
            textversion: '../module04/lesson03/textversion/04_03_04/textversion_01.htm',
            target: '17',
            entryID: '1_xmb9n8gx',
            location: {
                module: '04',
                lesson: '04.03'
            }
        },
        {
            title: 'Excel - Adding a Table',
            thumb: '../module04/lesson03/media/table.png',
            keywords: 'excel, cells, add, table, data, spreadsheet',
            description: 'Watch the Adding a Table video to learn how to add a table to your spreadsheet.',
            textversion: '../module04/lesson03/textversion/04_03_05/textversion_01.htm',
            target: '18',
            entryID: '1_soo2c7lm',
            location: {
                module: '04',
                lesson: '04.03'
            }
        },
        {
            title: 'Excel - Filtering Data',
            thumb: '../module04/lesson03/media/filtering.png',
            keywords: 'excel, cells, filtering, table, data, spreadsheet',
            description: 'Watch this Filtering Data video to see how to filter the data on your spreadsheet.',
            textversion: '../module04/lesson03/textversion/04_03_05/textversion_02.htm',
            target: '19',
            entryID: '1_0t203i8o',
            location: {
                module: '04',
                lesson: '04.03'
            }
        },
        {
            title: 'Excel - Sorting Data',
            thumb: '../module04/lesson03/media/sorting.png',
            keywords: 'excel, cells, sorting, table, data, spreadsheet',
            description: 'Watch this Sorting Data video to see how to sort the data on your spreadsheet.',
            textversion: '../module04/lesson03/textversion/04_03_07/textversion_01.htm',
            target: '20',
            entryID: '1_72vjm2q0',
            location: {
                module: '04',
                lesson: '04.03'
            }
        },
        {
            title: 'PowerPoint - Insert a Slide',
            thumb: '../module07/lesson01/media/insertslide.png',
            keywords: 'powerpoint, slide, insert',
            description: 'Watch this Insert a Slide video to learn how to insert a slide.',
            textversion: '../module07/lesson01/textversion/07_01_05/textversion_01.htm',
            target: '21',
            entryID: '1_t9jdlx8h',
            location: {
                module: '07',
                lesson: '07.01'
            }
        },
        {
            title: 'PowerPoint - Slide Layout',
            thumb: '../module07/lesson01/media/slidelayout.png',
            keywords: 'powerpoint, slide, insert, layout',
            description: 'Watch this Slide Layout video to learn how to change the layout of a content slide.',
            textversion: '../module07/lesson01/textversion/07_01_06/textversion_01.htm',
            target: '22',
            entryID: '1_8fxyjyj2',
            location: {
                module: '07',
                lesson: '07.01'
            }
        },
        {
            title: 'PowerPoint - Insert an Image',
            thumb: '../module07/lesson02/media/insertpicture.png',
            keywords: 'powerpoint, slide, insert, image, picture',
            description: 'Watch this Insert an Image video to learn how to insert a picture onto a PowerPoint slide.',
            textversion: '../module07/lesson02/textversion/07_02_03/textversion_01.htm',
            target: '23',
            entryID: '1_2w4na4tl',
            location: {
                module: '07',
                lesson: '07.02'
            }
        },
        {
            title: 'PowerPoint - Insert SmartArt',
            thumb: '../module07/lesson02/media/smartart.png',
            keywords: 'powerpoint, slide, insert, smart, art, smartart',
            description: 'Watch this SmartArt video to learn how to insert a SmartArt onto a PowerPoint slide.',
            textversion: '../module07/lesson02/textversion/07_02_05/textversion_01.htm',
            target: '24',
            entryID: '1_dcerbhnj',
            location: {
                module: '07',
                lesson: '07.02'
            }
        },
        {
            title: 'PowerPoint - Variants',
            thumb: '../module07/lesson03/media/themesvariants.png',
            keywords: 'powerpoint, slide, themes, variants',
            description: 'Watch this Variants video to learn how to manipulate variants in order to select the most appropriate color combinations.',
            textversion: '../module07/lesson03/textversions/07_03_03/textversion_01.htm',
            target: '25',
            entryID: '1_ez5pzma2',
            location: {
                module: '07',
                lesson: '07.03'
            }
        },
        {
            title: 'PowerPoint - Transitions',
            thumb: '../module07/lesson04/media/transition.png',
            keywords: 'powerpoint, slide, transition',
            description: 'Watch this Transitions video to learn how to apply transitions to slides.',
            textversion: '../module07/lesson04/textversions/07_04_02/textversion_02.htm',
            target: '26',
            entryID: '1_7syc670k',
            location: {
                module: '07',
                lesson: '07.04'
            }
        },
        {
            title: 'PowerPoint - Animations',
            thumb: '../module07/lesson04/media/animation.png',
            keywords: 'powerpoint, slide, animation',
            description: 'Watch this Animations video to learn how to apply animations to content on a slide.',
            textversion: '../module07/lesson04/textversions/07_04_04/textversion_02.htm',
            target: '27',
            entryID: '1_nve2c51r',
            location: {
                module: '07',
                lesson: '07.04'
            }
        }
    ];
});
    
/**
  * Created by michaelshur on 11/1/16.
  */
(function () {
    'use strict';

    angular
        .module('VideoGallery')
        .directive('kaltura', kaltura);

    kaltura.$inject = [];

    /* @ngInject */
    function kaltura() {
        var directive = {
            restrict: 'A',
            scope: {
                'object': '='
            },
            link: function(scope) {

                var kaltura = {
                    uiconf_id: "33130941",
                    partner_id: "2061901",
                    entry_id: scope.object.entryID,
                    height: scope.object.height,
                    width: scope.object.width,
                    class: "kaltura"
                };

                scope.object.height = "480";
                scope.object.width = "852";



                    kaltura.thumb_class = "kWidgetPlayBtn";


                var scriptInclude = '//cdnapisec.kaltura.com/p/'+kaltura.partner_id+'/sp/'+kaltura.partner_id+'00/embedIframeJs/uiconf_id/'+kaltura.uiconf_id+'/partner_id/'+kaltura.partner_id;

                $.ajax({
                    url: scriptInclude
                }).done(function( script, textStatus ) {

                    new kWidget.api( {
                        'wid' : '_'+kaltura.partner_id,
                    }).doRequest({
                        'service' : 'baseentry',
                        'action' : 'list',
                        'filter:objectType' : 'KalturaBaseEntryFilter',
                        'filter:idEqual' : kaltura.entry_id
                    }, function(data){
                        if( !data.objects || !data.objects[0] ){
                            kWidget.log('Error getting entry')
                            return ;
                        }
                        var entry = data.objects[0];
                        var settings = {
                            'targetId': kaltura.entry_id,
                            'wid' : '_'+kaltura.partner_id,
                            'entry_id': kaltura.entry_id,
                            'uiconf_id': kaltura.uiconf_id,
                            'height': scope.object.height,
                            "width": scope.object.width,
                            // since we already have the click gesture run kWiget embed with special capture click flag:
                            'captureClickEventForiOS' : true,
                            "flashvars": {
                                //This line adds your custom plugin:
                                "myCustomPluginName": {
                                    'plugin': true,
                                    //This line sets the plugin custom CSS file path:
                                    "iframeHTML5Css" : "http://cdn.flvs.net/cdn/4.0/css/" + kaltura.custom_css
                                }
                            }
                        };
                        // set callbakck to play on media ready ( works in iOS since we captured user gesture above)
                        settings.readyCallback = function (playerId) {
                            // issue a play ( since we already clicked the play button )
                            var kdp = document.getElementById(playerId);
                            kdp.kBind('mediaReady', function () {
                                kdp.sendNotification('doPlay');

                                //binds for callback on play, then runs object and turns off all videos except
                                kdp.kBind("doPlay", function(id, data){
                                    $.each( videoID, function( key, value ) {
                                        if(key !== id){
                                            videoID[key] = 'doPause';
                                            var kdpC = document.getElementById(key);
                                            kdpC.sendNotification('doPause');
                                        }else{
                                            videoID[key] = 'doPlay';
                                        }
                                    });
                                });

                                //binds for callback on pause, then updates object
                                kdp.kBind("doPause", function(id, data){
                                    videoID[id] = 'doPause';
                                });

                                //runs thru object and turns off anything playing on initial play
                                $.each( videoID, function( key, value ) {
                                    if(key !== playerId){
                                        videoID[key] = 'doPause';
                                        var kdpC = document.getElementById(key);
                                        kdpC.sendNotification('doPause');
                                    }else{
                                        videoID[key] = 'doPlay';
                                    }
                                });
                            });
                        };


                        $('#'+kaltura.entry_id)
                            .addClass(kaltura.class)
                            .append(
                                '<img class="kWidgetCentered '+ kaltura.image_class+'" src="' + kWidget.getKalturaThumbUrl(settings)  + '"">' +
                                '<div class="kWidgetCentered '+ kaltura.thumb_class+'"></div>'
                            ).click(function(){
                            kWidget.embed(settings);
                        });


                    })
                })
                    .fail(function( jqxhr, settings, exception ) {
                    });
            }
        };
        return directive;

    }
})();

