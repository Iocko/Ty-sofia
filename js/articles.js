$(function(){
    var $container = $(".article-list");
    var $mainContainer = $(".articles-container");
    let isMobile = window.matchMedia("only screen and (max-width: 600px)").matches;
    

    function buildMenuItem(data){
        var $el
        
        if(data.articles && data.articles.length)
        {
            let length = data.articles.length-1;
            if(isMobile){
                $mainContainer.append('<div class="article-preview">'+
                                    '<img src="'+data.articles[length].image+'">'+
                                    '<div class="article-preview-description">'+
                                    '<p>'+data.articles[length].title+'</p>'+
                                    '<div class="spacer"></div>'+
                                    '<a href="'+data.articles[length].link+'">Разберете още...</a>'+
                                    '</div>')
            }
            else{
            $mainContainer.prepend('<div class="article-preview">'+
                                    '<img src="'+data.articles[0].image+'">'+
                                    '<div class="article-preview-description">'+
                                    '<p>'+data.articles[0].title+'</p>'+
                                    '<div class="spacer"></div>'+
                                    '<a href="'+data.articles[0].link+'">Разберете още...</a>'+
                                    '</div>')
            }
            data.articles.forEach(function(entry)
             {
                
                if(isMobile)
                {
                    $el =   $('<div class="article-preview">'+
                            '<img src="'+entry.image+'">'+
                            '<div class="article-preview-description">'+
                            '<p>'+entry.title+'</p>'+
                            '<div class="spacer"></div>'+
                            '<a href="'+entry.link+'">Разберете още...</a>'+
                            '</div>')
                    $mainContainer.append($el)

                }
                    
                else{
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

                }
            })
            if(isMobile){
                $mainContainer.append('<div class="article-preview">'+
                                    '<img src="'+data.articles[0].image+'">'+
                                    '<div class="article-preview-description">'+
                                    '<p>'+data.articles[0].title+'</p>'+
                                    '<div class="spacer"></div>'+
                                    '<a href="'+data.articles[0].link+'">Разберете още...</a>'+
                                    '</div>')
            }
        }
    }
    $.get('./json/articles.json',function(data){
        $container.empty();
        data.forEach( article => {
            $container.append(buildMenuItem(article));
        });
    }, 'json')
    
    
})