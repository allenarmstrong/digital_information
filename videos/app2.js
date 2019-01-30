'use strict';
var VideoGrid = angular.module('VideoGallery', ['ngSanitize','videoPlayer']);

VideoGrid.controller('VideoGrid', ['$http', '$templateCache', '$sce',
    function VideoGrid($http, $templateCache, $sce) {
        var self = this;
        $http.get('video.json', {cache: $templateCache}).then(function(response) {
            self.videos = response.data;
        });

    }]);


