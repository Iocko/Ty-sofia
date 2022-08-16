$(function(){
    var $container = $(".article-list");
    var $mainContainer = $(".articles-container");
    

    function buildMenuItem(data){
        var $el
        
        if(data.articles && data.articles.length)
        {
            $mainContainer.prepend('<div class="article-preview">'+
                                    '<img src="'+data.articles[0].image+'">'+
                                    '<div class="article-preview-description">'+
                                    '<p>'+data.articles[0].title+'</p>'+
                                    '<div class="spacer"></div>'+
                                    '<a href="'+data.articles[0].link+'">Разберете още...</a>'+
                                    '</div>')
            data.articles.forEach(function(entry)
             {
                $el = $('<article id="'+entry.id+'">'+
                    '<img src="'+entry.image+'" class="image_article">'+
                    '<p class="article-description">'+entry.title+'</p>'+
                    '</article>')
                    $container.append($el)
                    $el.click(function (e) { 
                        var $mainEl = $('<div class="article-preview">'+
                                        '<img src="'+entry.image+'">'+
                                        '<div class="article-preview-description">'+
                                        '<p>'+entry.title+'</p>'+
                                        '<div class="spacer"></div>'+
                                        '<a href="'+entry.link+'">Разберете още...</a>'+
                                        '</div>')
                        $(".article-preview").remove();
                        $mainContainer.prepend($mainEl)
                    });
            })
        }
        return $el;
    }
    $.get('/json/articles.json',function(data){
        $container.empty();
        data.forEach( article => {
            $container.append(buildMenuItem(article));
        });
    }, 'json')
    
    
})