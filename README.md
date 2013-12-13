XMLtoHTML
===

Overview
---

Converts XML to formatted HTML. Requires jQuery as a dependency. 

Methods
---

###`XMLtoHTML(xml)`

*Parameters*

	`xml {string}` A string of well formed XML

*Returns*

	`{string}` A string of HTML markup that represents the XML for viewing in a browser. 


Example Usage
---

<kbd>**[Live Demo](http://jsfiddle.net/DVaQX/3/)**</kbd>

**HTML**

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

**JS**

    $('body').html(XMLtoHTML($('#myXML').html())); 