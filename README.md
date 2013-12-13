XMLtoHTML
===

Overview
---

Converts XML to formatted HTML. Requires jQuery as a dependency. 

Example Usage
---

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