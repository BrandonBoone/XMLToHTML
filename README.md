Overview
---

Converts XML to formatted HTML. Requires jQuery as a dependency. 

Methods
---

####`XMLtoHTML(xml)`

*Parameters*

`xml {string}` The well formed XML to be formatted

*Returns*

`{string}` HTML markup that represents the XML for viewing in a browser. 


Example Usage
---

####Example 1

<kbd>**[Live Demo](http://jsfiddle.net/RCy8D/1/)**</kbd>

**JS**

```JavaScript

$('body').html(
    XMLtoHTML('<topnode><!--Comment--><innernode attribute="attribute" /><othernode>value</othernode></topnode>')
); 

```

####Example 2

<kbd>**[Live Demo](http://jsfiddle.net/DVaQX/3/)**</kbd>

**HTML**

```XML
<script type='text/html' id='myXML'>
    <topNode>
        <!-- My comment-->
        <item myattribute='test' anotherone='hello world'>
            <innerNode>Test</innerNode>
            <nestedNode>
                
            </nestedNode>
        </item>
        <item>
            <innerNode>Test</innerNode>
            <nestedNode>
                <item>
                    <innerNode>Test</innerNode>
                    <nestedNode>
                        
                    </nestedNode>
                </item>
                <item>
                    <innerNode>Test</innerNode>
                    <nestedNode>
                        <item>
                            <innerNode>Test</innerNode>
                            <nestedNode>
                                
                            </nestedNode>
                        </item>
                    </nestedNode>
                </item>
            </nestedNode>
        </item>
    </topNode>
</script>
```

**JS**

```JavaScript
    $('body').html(XMLtoHTML($('#myXML').html())); 
```