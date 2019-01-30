/**
  * Created by michaelshur on 11/1/16.
  */
(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('quizmoKaltura', quizmoKaltura);

    quizmoKaltura.$inject = [];

    /* @ngInject */
    function quizmoKaltura() {
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

                if (!scope.object.height && scope.object.type === 'video') {
                    scope.object.height = "400";
                }

                if (!scope.object.width && scope.object.type === 'video') {
                    scope.object.width = "600";
                }


                if (!scope.object.height && scope.object.type === 'audio') {
                    scope.object.height = "30";
                }

                if (!scope.object.width && scope.object.type === 'audio') {
                    scope.object.width = "30";
                }


                if(scope.object.type === "audio") {
                    kaltura.class = "kalturaAudioBtn";
                    kaltura.uiconf_id = "36582731";
                    kaltura.thumb_class = "kWidgetPlayBtn audiobtn";
                    kaltura.image_class = "hide";
                    kaltura.custom_css = "kaltura_audio.css";
                }
                else {
                    kaltura.thumb_class = "kWidgetPlayBtn";
                }

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
                                'height': kaltura.height,
                                "width": kaltura.width,
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
