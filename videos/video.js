'use strict';
var VideoGrid = angular.module('videoPlayer',
    [
        'ngSanitize',
        'com.2fdevs.videogular',
        'com.2fdevs.videogular.plugins.controls',
        'com.2fdevs.videogular.plugins.overlayplay',
        'com.2fdevs.videogular.plugins.poster',
        'com.2fdevs.videogular.plugins.buffering'
    ]
    )
    .controller('HomeCtrl',
        ["$sce", "$timeout", function ($sce, $timeout) {
            var controller = this;
            controller.state = null;
            controller.API = null;
            controller.currentVideo = 0;

            controller.onPlayerReady = function (API) {
                controller.API = API;
            };

            controller.onCompleteVideo = function () {

            };

            controller.videos = [
                {
                    sources: [
                        {
                            src: $sce.trustAsResourceUrl("../module02/lesson01/media/creatingaccount.mp4"),
                            type: "video/mp4"
                        }
                    ]
                },
                {
                    sources: [
                        {
                            src: $sce.trustAsResourceUrl("../module02/lesson01/media/creatingfolder.mp4"),
                            type: "video/mp4"
                        }

                    ]
                },
                {
                    sources: [
                        {
                            src: $sce.trustAsResourceUrl("../module02/lesson01/media/uploadingfile.mp4"),
                            type: "video/mp4"
                        }

                    ]
                },
                {
                    sources: [
                        {
                            src: $sce.trustAsResourceUrl("../module02/lesson02/media/emailsignature.mp4"),
                            type: "video/mp4"
                        }

                    ]
                },
                {
                    sources: [
                        {src: $sce.trustAsResourceUrl("../module02/lesson02/media/addattachments.mp4"), type: "video/mp4"}

                    ]
                },
                {
                    sources: [
                        {src: $sce.trustAsResourceUrl("../module02/lesson02/media/creatingevent.mp4"), type: "video/mp4"}

                    ]
                },
                {
                    sources: [
                        {src: $sce.trustAsResourceUrl("../module02/lesson03/media/lists1.mp4"), type: "video/mp4"}

                    ]
                },
                {
                    sources: [
                        {src: $sce.trustAsResourceUrl("../module02/lesson03/media/spacing.mp4"), type: "video/mp4"}

                    ]
                },
                {
                    sources: [
                        {src: $sce.trustAsResourceUrl("../module02/lesson04/media/headerfooter.mp4"), type: "video/mp4"}

                    ]
                },
                {
                    sources: [
                        {src: $sce.trustAsResourceUrl("../module02/lesson04/media/hyperlink.mp4"), type: "video/mp4"}

                    ]
                },
                {
                    sources: [
                        {src: $sce.trustAsResourceUrl("../module02/lesson04/media/basictable.mp4"), type: "video/mp4"}

                    ]
                },
                {
                    sources: [
                        {src: $sce.trustAsResourceUrl("../module02/lesson04/media/tableformatting.mp4"), type: "video/mp4"}

                    ]
                },
                 {
                    sources: [
                        {src: $sce.trustAsResourceUrl("../module04/lesson01/media/formatcell.mp4"), type: "video/mp4"}

                    ]
                },
                {
                    sources: [
                        {src: $sce.trustAsResourceUrl("../module04/lesson01/media/merge.mp4"), type: "video/mp4"}

                    ]
                },
                {
                    sources: [
                        {src: $sce.trustAsResourceUrl("../module04/lesson01/media/filldata.mp4"), type: "video/mp4"}

                    ]
                },
                {
                    sources: [
                        {src: $sce.trustAsResourceUrl("../module04/lesson02/media/function.mp4"), type: "video/mp4"}

                    ]
                },
                {
                    sources: [
                        {src: $sce.trustAsResourceUrl("../module04/lesson02/media/logical.mp4"), type: "video/mp4"}

                    ]
                },
                {
                    sources: [
                        {src: $sce.trustAsResourceUrl("../module04/lesson03/media/chart_pie.mp4"), type: "video/mp4"}

                    ]
                },
                {
                    sources: [
                        {src: $sce.trustAsResourceUrl("../module04/lesson03/media/table.mp4"), type: "video/mp4"}

                    ]
                },
                {
                    sources: [
                        {src: $sce.trustAsResourceUrl("../module04/lesson03/media/filtering.mp4"), type: "video/mp4"}

                    ]
                },
                {
                    sources: [
                        {src: $sce.trustAsResourceUrl("../module04/lesson03/media/sorting.mp4"), type: "video/mp4"}

                    ]
                },
                {
                    sources: [
                        {src: $sce.trustAsResourceUrl("../module07/lesson01/media/insertslide.mp4"), type: "video/mp4"}

                    ]
                },
                {
                    sources: [
                        {src: $sce.trustAsResourceUrl("../module07/lesson01/media/slidelayout.mp4"), type: "video/mp4"}

                    ]
                },
                {
                    sources: [
                        {src: $sce.trustAsResourceUrl("../module07/lesson02/media/insertpicture.mp4"), type: "video/mp4"}

                    ]
                },
                {
                    sources: [
                        {src: $sce.trustAsResourceUrl("../module07/lesson02/media/smartart.mp4"), type: "video/mp4"}

                    ]
                },
                {
                    sources: [
                        {src: $sce.trustAsResourceUrl("../module07/lesson03/media/themesvariants.mp4"), type: "video/mp4"}

                    ]
                },
                {
                    sources: [
                        {src: $sce.trustAsResourceUrl("../module07/lesson04/media/transition.mp4"), type: "video/mp4"}

                    ]
                },
                {
                    sources: [
                        {src: $sce.trustAsResourceUrl("../module07/lesson04/media/animation.mp4"), type: "video/mp4"}

                    ]
                },
            ];

            controller.config = {
                preload: "none",
                autoHide: true,
                autoHideTime: 300,
                autoPlay: false,
                sources: controller.videos[0].sources,
                theme: {
                    url: "css/videogular.css"
                },
                plugins: {
                }
            };

            controller.setVideo = function (index) {
                // controller.API.stop();
                // controller.currentVideo = index;
                // controller.config.sources = controller.videos[index].sources;
                // $timeout(controller.API.play.bind(controller.API), 100);
            };
        }]
    );