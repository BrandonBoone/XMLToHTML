;(function($, undefined){
    var XMLtoHTML = new function(){
    
        return function(xml){
            var sb = []; 
            var data = $($.parseXML(xml))[0];   
            
            recurse(data, sb); 
            return sb.join(''); 
        };
        
        function recurse(data, sb){
            if(data.nodeType === 8){
                sb.push(
                    '<span class="comment">&lt;!--', 
                    data.nodeValue,
                    '--&gt;</span>'
                );
            }
            else if(data.nodeType === 3){
                sb.push(
                    '<span class="value">', 
                    data.nodeValue,
                    '</span>'
                );
            }else if(data.nodeType === 1){
                sb.push(
                    '<span class="node"><span class="tag">&lt;</span>',   
                    '<span class="element">',
                    data.nodeName.toLowerCase(),
                    '</span>'
                );  
                if(data.hasAttributes()){
                    for (var attr in data.attributes) {
                        if(data.attributes.hasOwnProperty(attr) && attr != 'length'){
                            
                          sb.push(
                              ' <span class="attribute">', 
                              data.attributes[attr].nodeName, 
                              '</span><span class="tag">=&quot;</span><span class="value">', 
                              data.attributes[attr].nodeValue, 
                              '</span><span class="tag">&quot;</span>'
                          );
                        }
                    }
                }
                sb.push('<span class="tag">&gt;</span>'); 
            }
            var len = data.childNodes ?  data.childNodes.length : 0;
            for(var i = 0; i < len; i++){
                recurse(data.childNodes[i], sb);    
            }
            
            if(data.nodeType == 1){
                sb.push(
                    '<span class="tag">&lt;/</span>',   
                    '<span class="element">',
                    data.nodeName.toLowerCase(),
                    '</span>',
                    '<span class="tag">&gt;</span></span>'
                );   
            }
        }
        
    };

})(jQuery);

$('body').html(XMLFormatter($('#myXML').html())); 
