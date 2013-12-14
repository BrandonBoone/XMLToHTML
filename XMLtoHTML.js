;(function($, undefined){
    window.XMLtoHTML = (function(){
    
        return function(xml){
            var sb = [], //Store the resulting HTML in an array. Acts like a C# StringBuilder
                data = $($.parseXML(xml))[0]; //Use jQuery's parse method to get the XML document  
            
            recurse(data, sb); //Recurse through the XML document to generate the HTML
            return sb.join(''); //Merge the array into a single string.
        };
        
        function recurse(data, sb){
            if(data.nodeType === 8){ //Comments
                sb.push(
                    '<span class="comment">&lt;!--', 
                    data.nodeValue,
                    '--&gt;</span>'
                );
            }
            else if(data.nodeType === 3){ //Values
                sb.push(
                    '<span class="value">', 
                    data.nodeValue,
                    '</span>'
                );
            }else if(data.nodeType === 1){ //Nodes
                sb.push(
                    '<span class="node"><span class="tag">&lt;</span>',   
                    '<span class="element">',
                    data.nodeName.toLowerCase(),
                    '</span>'
                );  
                if(data.hasAttributes()){ //Attributes
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
            //Iterate over children
            var len = data.childNodes ?  data.childNodes.length : 0,
                i = 0;
            for(; i < len; i++){ 
                recurse(data.childNodes[i], sb);    
            }
            
            if(data.nodeType === 1){//Close the Node
                sb.push(
                    '<span class="tag">&lt;/</span>',   
                    '<span class="element">',
                    data.nodeName.toLowerCase(),
                    '</span>',
                    '<span class="tag">&gt;</span></span>'
                );   
            }
        }
        
    })();

})(jQuery);
