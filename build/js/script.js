$(document).ready(function(){
    $('.project-thumbnail').hover(
        function(){
            $(this).find('.project-thumbnail-overlay').toggle("slide");
            $(this).find('.project-category').toggle("slide");
        }
    )
});
