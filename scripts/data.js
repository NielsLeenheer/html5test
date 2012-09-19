var tests = [
	{
		id:		'parsing',
		name:	'Parsing rules',
		items:	[
					{
						id:		'doctype',
						name: 	'<code>&lt;!DOCTYPE html&gt;</code> triggers standards mode', 
						url:    'http://www.w3.org/TR/html5/syntax.html#the-doctype'
					}, {
						id:		'tokenizer',
						name: 	'HTML5 tokenizer', 
						url:	'http://www.w3.org/TR/html5/parsing.html'
					}, {
						id:		'tree',
						name: 	'HTML5 tree building', 
						url:	'http://www.w3.org/TR/html5/parsing.html'
					}, 
					
					'<em>HTML5 defines rules for embedding SVG and MathML inside a regular HTML document. Support for SVG and MathML is not required though, so bonus points are awarded if your browser supports embedding these two technologies.</em>',
					
					{
						id:		'svg',
						name: 	'SVG in <code>text/html</code>', 
						url:	'http://www.w3.org/TR/html5/the-map-element.html#svg-0'
					}, {
						id:		'mathml',
						name: 	'MathML in <code>text/html</code>', 
						url:	'http://www.w3.org/TR/html5/the-map-element.html#mathml'
					}
				]
	}, {
		id:		'canvas',
		name:	'Canvas',
		items:	[
					{
						id:		'element',
						name: 	'<code>canvas</code> element', 
						url:	'http://www.w3.org/TR/html5/the-canvas-element.html#the-canvas-element'
					}, {
						id:		'context',
						name: 	'2D context', 
						url:    'http://www.w3.org/TR/2dcontext/'
					}, {
						id:		'text',
						name: 	'Text', 
						url:	'http://www.w3.org/TR/2dcontext/#text'
					}
				]
	}, {
		id:		'video',
		name:	'Video',
		items:	[
					{
						id:		'element',
						name: 	'<code>video</code> element', 
						url:	'http://www.w3.org/TR/html5/the-iframe-element.html#the-video-element'
					}, {
						id:		'subtitle',
						name: 	'Subtitle support', 
						url:	'http://www.w3.org/TR/html5/the-iframe-element.html#the-track-element'
					}, {
						id:		'poster',
						name: 	'Poster image support', 
						url:	'http://www.w3.org/TR/html5/the-iframe-element.html#dom-video-poster'
					}, 
					
					'<em>The following tests go beyond the requirements of the HTML5 specification and are not counted towards the total score. If browser support for one or more video codecs is detected, two bonus points are awarded for each codec.</em>',
					
					{
						id:		'mpeg4',
						name: 	'MPEG-4 support'
					}, {
						id:		'h264',
						name: 	'H.264 support'
					}, {
						id:		'theora',
						name: 	'Ogg Theora support'
					}, {
						id:		'webm',
						name: 	'WebM support'
					}
				]
	}, {
		id:		'audio',
		name:	'Audio',
		items:	[
					{
						id:		'element',
						name: 	'<code>audio</code> element', 
						url:	'http://www.w3.org/TR/html5/the-iframe-element.html#the-audio-element'
					},
					
					'<em>The following tests go beyond the requirements of the HTML5 specification and are not counted towards the total score. If browser support for one or more audio codecs is detected, one bonus point is awarded for each codec.</em>',
					
					{
						id:		'pcm',
						name: 	'PCM audio support'
					}, { 
						id:		'aac',
						name: 	'AAC support'
					}, { 
						id:		'mp3',
						name: 	'MP3 support'
					}, { 
						id:		'opus',
						name: 	'Opus support'
					}, { 
						id:		'vorbis',
						name: 	'Ogg Vorbis support'
					}, { 
						id:		'webm',
						name: 	'WebM support'
					}
				]	
	}, {
		id:		'elements',
		name:	'Elements',
		items:	[
					{
						id:		'dataset',
						name: 	'Embedding custom non-visible data', 
						url:	'http://www.w3.org/TR/html5/elements.html#dom-dataset'
					}, 
					
					'<strong>New or modified elements</strong>',
					
					{
						id:		'section',
						name:	'Section elements',
						items:	[
									{
										id:		'section',
										name: 	'<code>section</code> element', 
										url:	'http://www.w3.org/TR/html5/sections.html#the-section-element'
									}, {
										id:		'nav',
										name: 	'<code>nav</code> element', 
										url:	'http://www.w3.org/TR/html5/sections.html#the-nav-element'
									}, {
										id:		'article',
										name: 	'<code>article</code> element', 
										url:	'http://www.w3.org/TR/html5/sections.html#the-article-element'
									}, {
										id:		'aside',
										name: 	'<code>aside</code> element', 
										url:	'http://www.w3.org/TR/html5/sections.html#the-aside-element'
									}, {
										id:		'hgroup',
										name: 	'<code>hgroup</code> element', 
										url:	'http://www.w3.org/TR/html5/sections.html#the-hgroup-element'
									}, {
										id:		'header',
										name: 	'<code>header</code> element', 
										url:	'http://www.w3.org/TR/html5/sections.html#the-header-element'
									}, {
										id:		'footer',
										name: 	'<code>footer</code> element', 
										url:	'http://www.w3.org/TR/html5/sections.html#the-footer-element'
									}
								]
						
					}, {
						id:		'grouping',
						name:	'Grouping content elements',
						items:	[
									{
										id:		'figure',
										name: 	'<code>figure</code> element', 
										url:	'http://www.w3.org/TR/html5/grouping-content.html#the-figure-element'
									}, {
										id:		'figcaption',
										name: 	'<code>figcaption</code> element', 
										url:	'http://www.w3.org/TR/html5/grouping-content.html#the-figcaption-element'
									}, {
										id:		'ol',
										name: 	'<code>reversed</code> attribute on the <code>ol</code> element', 
										url:	'http://www.w3.org/TR/html5/grouping-content.html#the-ol-element'
									}
								]					
					}, {
						id:		'semantic',
						name:	'Text-level semantic elements',
						items:	[
									{
										id:		'mark',
										name: 	'<code>mark</code> element', 
										url:	'http://www.w3.org/TR/html5/text-level-semantics.html#the-mark-element'
									}, {
										id:		'ruby',
										name: 	'<code>ruby</code>, <code>rt</code> and <code>rp</code> elements', 
										url:	'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element'
									}, {
										id:		'time',
										name: 	'<code>time</code> element', 
										url:	'http://www.w3.org/TR/html5/text-level-semantics.html#the-time-element'
									}, {
										id:		'wbr',
										name: 	'<code>wbr</code> element', 
										url:	'http://www.w3.org/TR/html5/text-level-semantics.html#the-wbr-element'
									}
								]					
					}, {
						id:		'interactive',
						name:	'Interactive elements',
						items:	[
									{
										id:		'details',
										name: 	'<code>details</code> element', 
										url:	'http://www.w3.org/TR/html5/interactive-elements.html#the-details-element'
									}, {
										id:		'summary',
										name: 	'<code>summary</code> element', 
										url:	'http://www.w3.org/TR/html5/interactive-elements.html#the-summary-element'
									}, {
										id:		'command',
										name: 	'<code>command</code> element', 
										url:	'http://www.w3.org/TR/html5/interactive-elements.html#the-command-element'
									}, {
										id:		'menu',
										name: 	'<code>menu</code> element of type <code>list</code>', 
										url:	'http://www.w3.org/TR/html5/interactive-elements.html#the-menu-element'
									}, {
										id:		'menutoolbar',
										name: 	'<code>menu</code> element of type <code>toolbar</code>', 
										url:	'http://www.w3.org/TR/html5/interactive-elements.html#the-menu-element'
									}, {
										id:		'menucontext',
										name: 	'<code>menu</code> element of type <code>context</code>', 
										url:	'http://www.w3.org/TR/html5/interactive-elements.html#the-menu-element'
									}
								]					
					},
					
					'<strong>Global attributes or methods</strong>',

					{
						id:		'hidden',
						name: 	'<code>hidden</code> attribute', 
						url:	'http://www.w3.org/TR/html5/editing.html#the-hidden-attribute'
					}, {
						id:		'dynamic',
						name:	'Dynamic markup insertion',
						items:	[
									{
										id:		'outerHTML',
										name: 	'<code>outerHTML</code> property', 
										url:	'http://www.w3.org/TR/html5/apis-in-html-documents.html#outerhtml'
									}, {
										id:		'insertAdjacentHTML',
										name: 	'<code>insertAdjacentHTML</code> function', 
										url:	'http://www.w3.org/TR/html5/apis-in-html-documents.html#dom-insertadjacenthtml'
									}
								]
					}
				]
	}, {
		id:		'form',
		name:	'Forms',
		items:	[
					'<strong>Field types</strong>',
					
					{
						id:		'text',
						name:	'<code>input type=text</code>',
						items:	[
									{
										id:			'element',
										name: 		'Minimal element support'
									}, {
										id:			'selection',
										name: 		'Selection Direction'
									}
								]
					}, {
						id:		'search',
						name:	'<code>input type=search</code>',
						items:	[
									{
										id:			'element',
										name: 		'Minimal element support', 
										url:		'http://www.w3.org/TR/html5/states-of-the-type-attribute.html#text-state-and-search-state'
									}
								]
					}, {
						id:		'tel',
						name:	'<code>input type=tel</code>',
						items:	[
									{
										id:			'element',
										name: 		'Minimal element support', 
										url:		'http://www.w3.org/TR/html5/states-of-the-type-attribute.html#telephone-state'
									}
								]
					}, {
						id:		'url',
						name:	'<code>input type=url</code>',
						items:	[
									{
										id:			'element',
										name: 		'Minimal element support', 
										url:		'http://www.w3.org/TR/html5/states-of-the-type-attribute.html#url-state'
									}, {
										id:			'validation',
										name: 		'Field validation', 
										url:		'http://www.w3.org/TR/html5/association-of-controls-and-forms.html#dom-cva-validity'
									}
								]
					}, {
						id:		'email',
						name:	'<code>input type=email</code>',
						items:	[
									{
										id:			'element',
										name: 		'Minimal element support', 
										url:		'http://www.w3.org/TR/html5/states-of-the-type-attribute.html#e-mail-state'
									}, {
										id:			'validation',
										name: 		'Field validation', 
										url:		'http://www.w3.org/TR/html5/association-of-controls-and-forms.html#dom-cva-validity'
									}
								]
					}, {
						id:		'datetime',
						name:	'<code>input type=datetime</code>',
						items:	[
									{
										id:			'element',
										name: 		'Minimal element support', 
										url:		'http://www.w3.org/TR/html5/states-of-the-type-attribute.html#date-and-time-state'
									}, {
										id:			'ui',
										name: 		'Custom user-interface'
									}, {
										id:			'sanitization',
										name: 		'Value sanitization', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#value-sanitization-algorithm'
									}, {
										id:			'min',
										name: 		'<code>min</code> attribute', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#dom-input-min'
									}, {
										id:			'max',
										name: 		'<code>max</code> attribute', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#dom-input-max'
									}, {
										id:			'step',
										name: 		'<code>step</code> attribute', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#dom-input-step'
									}, {
										id:			'stepDown',
										name: 		'<code>stepDown()</code> method',
										url:		'http://www.w3.org/TR/html5/common-input-element-attributes.html#dom-input-stepdown'
									}, {
										id:			'stepUp',
										name: 		'<code>stepUp()</code> method',
										url:		'http://www.w3.org/TR/html5/common-input-element-attributes.html#dom-input-stepup'
									}
								]
					}, {
						id:		'date',
						name:	'<code>input type=date</code>',
						items:	[
									{
										id:			'element',
										name: 		'Minimal element support', 
										url:		'http://www.w3.org/TR/html5/states-of-the-type-attribute.html#date-state'
									}, {
										id:			'ui',
										name: 		'Custom user-interface'
									}, {
										id:			'sanitization',
										name: 		'Value sanitization', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#value-sanitization-algorithm'
									}, {
										id:			'min',
										name: 		'<code>min</code> attribute', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#dom-input-min'
									}, {
										id:			'max',
										name: 		'<code>max</code> attribute', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#dom-input-max'
									}, {
										id:			'step',
										name: 		'<code>step</code> attribute', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#dom-input-step'
									}, {
										id:			'stepDown',
										name: 		'<code>stepDown()</code> method',
										url:		'http://www.w3.org/TR/html5/common-input-element-attributes.html#dom-input-stepdown'
									}, {
										id:			'stepUp',
										name: 		'<code>stepUp()</code> method',
										url:		'http://www.w3.org/TR/html5/common-input-element-attributes.html#dom-input-stepup'
									}
								]
					}, {
						id:		'month',
						name:	'<code>input type=month</code>',
						items:	[
									{
										id:			'element',
										name: 		'Minimal element support', 
										url:		'http://www.w3.org/TR/html5/states-of-the-type-attribute.html#month-state'
									}, {
										id:			'ui',
										name: 		'Custom user-interface'
									}, {
										id:			'sanitization',
										name: 		'Value sanitization', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#value-sanitization-algorithm'
									}, {
										id:			'min',
										name: 		'<code>min</code> attribute', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#dom-input-min'
									}, {
										id:			'max',
										name: 		'<code>max</code> attribute', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#dom-input-max'
									}, {
										id:			'step',
										name: 		'<code>step</code> attribute', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#dom-input-step'
									}, {
										id:			'stepDown',
										name: 		'<code>stepDown()</code> method',
										url:		'http://www.w3.org/TR/html5/common-input-element-attributes.html#dom-input-stepdown'
									}, {
										id:			'stepUp',
										name: 		'<code>stepUp()</code> method',
										url:		'http://www.w3.org/TR/html5/common-input-element-attributes.html#dom-input-stepup'
									}
								]
					}, {
						id:		'week',
						name:	'<code>input type=week</code>',
						items:	[
									{
										id:			'element',
										name: 		'Minimal element support', 
										url:		'http://www.w3.org/TR/html5/states-of-the-type-attribute.html#week-state'
									}, {
										id:			'ui',
										name: 		'Custom user-interface'
									}, {
										id:			'sanitization',
										name: 		'Value sanitization', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#value-sanitization-algorithm'
									}, {
										id:			'min',
										name: 		'<code>min</code> attribute', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#dom-input-min'
									}, {
										id:			'max',
										name: 		'<code>max</code> attribute', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#dom-input-max'
									}, {
										id:			'step',
										name: 		'<code>step</code> attribute', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#dom-input-step'
									}, {
										id:			'stepDown',
										name: 		'<code>stepDown()</code> method',
										url:		'http://www.w3.org/TR/html5/common-input-element-attributes.html#dom-input-stepdown'
									}, {
										id:			'stepUp',
										name: 		'<code>stepUp()</code> method',
										url:		'http://www.w3.org/TR/html5/common-input-element-attributes.html#dom-input-stepup'
									}
								]
					}, {
						id:		'time',
						name:	'<code>input type=time</code>',
						items:	[
									{
										id:			'element',
										name: 		'Minimal element support', 
										url:		'http://www.w3.org/TR/html5/states-of-the-type-attribute.html#time-state'
									}, {
										id:			'ui',
										name: 		'Custom user-interface'
									}, {
										id:			'sanitization',
										name: 		'Value sanitization', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#value-sanitization-algorithm'
									}, {
										id:			'min',
										name: 		'<code>min</code> attribute', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#dom-input-min'
									}, {
										id:			'max',
										name: 		'<code>max</code> attribute', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#dom-input-max'
									}, {
										id:			'step',
										name: 		'<code>step</code> attribute', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#dom-input-step'
									}, {
										id:			'stepDown',
										name: 		'<code>stepDown()</code> method',
										url:		'http://www.w3.org/TR/html5/common-input-element-attributes.html#dom-input-stepdown'
									}, {
										id:			'stepUp',
										name: 		'<code>stepUp()</code> method',
										url:		'http://www.w3.org/TR/html5/common-input-element-attributes.html#dom-input-stepup'
									}
								]
					}, {
						id:		'datetime-local',
						name:	'<code>input type=datetime-local</code>',
						items:	[
									{
										id:			'element',
										name: 		'Minimal element support', 
										url:		'http://www.w3.org/TR/html5/states-of-the-type-attribute.html#local-date-and-time-state'
									}, {
										id:			'ui',
										name: 		'Custom user-interface'
									}, {
										id:			'sanitization',
										name: 		'Value sanitization', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#value-sanitization-algorithm'
									}, {
										id:			'min',
										name: 		'<code>min</code> attribute', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#dom-input-min'
									}, {
										id:			'max',
										name: 		'<code>max</code> attribute', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#dom-input-max'
									}, {
										id:			'step',
										name: 		'<code>step</code> attribute', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#dom-input-step'
									}, {
										id:			'stepDown',
										name: 		'<code>stepDown()</code> method',
										url:		'http://www.w3.org/TR/html5/common-input-element-attributes.html#dom-input-stepdown'
									}, {
										id:			'stepUp',
										name: 		'<code>stepUp()</code> method',
										url:		'http://www.w3.org/TR/html5/common-input-element-attributes.html#dom-input-stepup'
									}
								]
					}, {
						id:		'number',
						name:	'<code>input type=number</code>',
						items:	[
									{
										id:			'element',
										name: 		'Minimal element support',
										url:		'http://www.w3.org/TR/html5/number-state.html#number-state'
									}, {
										id:			'ui',
										name: 		'Custom user-interface'
									}, {
										id:			'sanitization',
										name: 		'Value sanitization', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#value-sanitization-algorithm'
									}, {
										id:			'validation',
										name: 		'Field validation', 
										url:		'http://www.w3.org/TR/html5/association-of-controls-and-forms.html#dom-cva-validity'
									}, {
										id:			'min',
										name: 		'<code>min</code> attribute', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#dom-input-min'
									}, {
										id:			'max',
										name: 		'<code>max</code> attribute', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#dom-input-max'
									}, {
										id:			'step',
										name: 		'<code>step</code> attribute', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#dom-input-step'
									}, {
										id:			'stepDown',
										name: 		'<code>stepDown()</code> method',
										url:		'http://www.w3.org/TR/html5/common-input-element-attributes.html#dom-input-stepdown'
									}, {
										id:			'stepUp',
										name: 		'<code>stepUp()</code> method',
										url:		'http://www.w3.org/TR/html5/common-input-element-attributes.html#dom-input-stepup'
									}
								]
					}, {
						id:		'range',
						name:	'<code>input type=range</code>',
						items:	[
									{
										id:			'element',
										name: 		'Minimal element support',
										url:		'http://www.w3.org/TR/html5/number-state.html#range-state'
									}, {
										id:			'ui',
										name: 		'Custom user-interface'
									}, {
										id:			'sanitization',
										name: 		'Value sanitization', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#value-sanitization-algorithm'
									}, {
										id:			'min',
										name: 		'<code>min</code> attribute', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#dom-input-min'
									}, {
										id:			'max',
										name: 		'<code>max</code> attribute', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#dom-input-max'
									}, {
										id:			'step',
										name: 		'<code>step</code> attribute', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#dom-input-step'
									}, {
										id:			'stepDown',
										name: 		'<code>stepDown()</code> method',
										url:		'http://www.w3.org/TR/html5/common-input-element-attributes.html#dom-input-stepdown'
									}, {
										id:			'stepUp',
										name: 		'<code>stepUp()</code> method',
										url:		'http://www.w3.org/TR/html5/common-input-element-attributes.html#dom-input-stepup'
									}
								]
					}, {
						id:		'color',
						name:	'<code>input type=color</code>',
						items:	[
									{
										id:			'element',
										name: 		'Minimal element support',
										url:		'http://www.w3.org/TR/html5/number-state.html#color-state'
									}, {
										id:			'ui',
										name: 		'Custom user-interface'
									}, {
										id:			'sanitization',
										name: 		'Value sanitization', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#value-sanitization-algorithm'
									}, {
										id:			'validation',
										name: 		'Field validation', 
										url:		'http://www.w3.org/TR/html5/association-of-controls-and-forms.html#dom-cva-validity'
									}
								]
					}, {
						id:		'checkbox',
						name:	'<code>input type=checkbox</code>',
						items:	[
									{
										id:			'element',
										name: 		'Minimal element support',
										url:		'http://www.w3.org/TR/html5/number-state.html#checkbox-state'
									}, {
										id:			'indeterminate',
										name: 		'<code>indeterminate</code> property', 
										url:		'http://www.w3.org/TR/html5/the-input-element.html#dom-input-indeterminate'
									}
								]
					}, {
						id:		'image',
						name:	'<code>input type=image</code>',
						items:	[
									{
										id:			'element',
										name: 		'Minimal element support', 
										url:		'http://www.w3.org/TR/html5/number-state.html#image-button-state'
									}, {
										id:			'width',
										name: 		'<code>width</code> property', 
										url:		'http://www.w3.org/TR/html5/the-map-element.html#attr-dim-width'
									}, {
										id:			'height',
										name: 		'<code>height</code> property', 
										url:		'http://www.w3.org/TR/html5/the-map-element.html#attr-dim-height'
									}
								]
					}, {
						id:		'file',
						name:	'<code>input type=file</code>',
						items:	[
									{
										id:			'element',
										name: 		'Minimal element support', 
										url:		'http://www.w3.org/TR/html5/number-state.html#file-upload-state'
									}, {
										id:			'files',
										name: 		'<code>files</code> property', 
										url:		'http://www.w3.org/TR/html5/common-input-element-attributes.html#dom-input-files'
									}
								]
					}, {
						id:		'textarea',
						name:	'<code>textarea</code>',
						items:	[
									{
										id:			'element',
										name: 		'Minimal element support', 
										url:		'http://www.w3.org/TR/html5/the-button-element.html#the-textarea-element'
									}, {
										id:			'maxlength',
										name:		'<code>maxlength</code> attribute',
										url:		'http://www.w3.org/TR/html5/the-button-element.html#attr-textarea-maxlength'
									}, {
										id:			'wrap',
										name:		'<code>wrap</code> attribute',
										url:		'http://www.w3.org/TR/html5/the-button-element.html#attr-textarea-wrap'
									}
								]
					}, {
						id:		'select',
						name:	'<code>select</code>',
						items:	[
									{
										id:			'element',
										name: 		'Minimal element support', 
										url:		'http://www.w3.org/TR/html5/the-button-element.html#the-select-element'
									}, {
										id:			'required',
										name:		'<code>required</code> attribute',
										url:		'http://www.w3.org/TR/html5/the-button-element.html#dom-select-required'
									}
								]
					}, {
						id:		'fieldset',
						name:	'<code>fieldset</code>',
						items:	[
									{
										id:			'element',
										name: 		'Minimal element support', 
										url:		'http://www.w3.org/TR/html5/forms.html#the-fieldset-element'
									}, {
										id:			'elements',
										name:		'<code>elements</code> attribute',
										url:		'http://www.w3.org/TR/html5/forms.html#dom-fieldset-elements'
									}, {
										id:			'disabled',
										name:		'<code>disabled</code> attribute',
										url:		'http://www.w3.org/TR/html5/forms.html#dom-fieldset-disabled'
									}
								]
					}, {
						id:		'datalist',
						name:	'<code>datalist</code>',
						items:	[
									{
										id:			'element',
										name: 		'Minimal element support', 
										url:		'http://www.w3.org/TR/html5/the-button-element.html#the-datalist-element'
									}, {
										id:			'list',
										name:		'<code>list</code> attribute for fields',
										url:		'http://www.w3.org/TR/html5/common-input-element-attributes.html#attr-input-list'
									}
								]
					}, {
						id:		'keygen',
						name:	'<code>keygen</code>',
						items:	[
									{
										id:			'element',
										name: 		'Minimal element support', 
										url:		'http://www.w3.org/TR/html5/the-button-element.html#the-keygen-element'
									}, {
										id:			'challenge',
										name: 		'<code>challenge</code> attribute', 
										url:		'http://www.w3.org/TR/html5/the-button-element.html#attr-keygen-challenge'
									}, {
										id:			'keytype',
										name: 		'<code>keytype</code> attribute', 
										url:		'http://www.w3.org/TR/html5/the-button-element.html#dom-keygen-keytype'
									}
								]
					}, {
						id:		'output',
						name:	'<code>output</code>',
						items:	[
									{
										id:			'element',
										name: 		'Minimal element support', 
										url:		'http://www.w3.org/TR/html5/the-button-element.html#the-output-element'
									}
								]
					}, {
						id:		'progress',
						name:	'<code>progress</code>',
						items:	[
									{
										id:			'element',
										name: 		'Minimal element support', 
										url:		'http://www.w3.org/TR/html5/the-button-element.html#the-progress-element'
									}
								]
					}, {
						id:		'meter',
						name:	'<code>meter</code>',
						items:	[
									{
										id:			'element',
										name: 		'Minimal element support', 
										url:		'http://www.w3.org/TR/html5/the-button-element.html#the-meter-element'
									}
								]
					},
					
					'<strong>Fields</strong>',
					
					{
						id:		'validation',
						name:	'Field validation',
						items:	[
									{
										id:			'pattern',
										name: 		'<code>pattern</code> attribute', 
										url:		'http://www.w3.org/TR/html5/common-input-element-attributes.html#attr-input-pattern'
									}, {
										id:			'required',
										name: 		'<code>required</code> attribute', 
										url:		'http://www.w3.org/TR/html5/common-input-element-attributes.html#attr-input-required'
									}
								]
					}, {
						id:		'association',
						name:	'Association of controls and forms',
						items:	[
									{
										id:			'control',
										name: 		'<code>control</code> property on labels', 
										url:		'http://www.w3.org/TR/html5/forms.html#dom-label-control'
									}, {
										id:			'form',
										name: 		'<code>form</code> property on fields', 
										url:		'http://www.w3.org/TR/html5/association-of-controls-and-forms.html#attr-fae-form'
									}, {
										id:			'formAction',
										name: 		'<code>formAction</code> property on fields', 
										url:		'http://www.w3.org/TR/html5/association-of-controls-and-forms.html#attr-fs-formaction'
									}, {
										id:			'formEnctype',
										name: 		'<code>formEnctype</code> property on fields', 
										url:		'http://www.w3.org/TR/html5/association-of-controls-and-forms.html#attr-fs-formenctype'
									}, {
										id:			'formMethod',
										name: 		'<code>formMethod</code> property on fields', 
										url:		'http://www.w3.org/TR/html5/association-of-controls-and-forms.html#attr-fs-formmethod'
									}, {
										id:			'formNoValidate',
										name: 		'<code>formNoValidate</code> property on fields', 
										url:		'http://www.w3.org/TR/html5/association-of-controls-and-forms.html#attr-fs-formnovalidate'
									}, {
										id:			'formTarget',
										name: 		'<code>formTarget</code> property on fields', 
										url:		'http://www.w3.org/TR/html5/association-of-controls-and-forms.html#attr-fs-formtarget'
									}, {
										id:			'labels',
										name: 		'<code>labels</code> property on fields', 
										url:		'http://www.w3.org/TR/html5/forms.html#dom-lfe-labels'
									}
								]
					}, {
						id:		'other',
						name:	'Other attributes',
						items:	[
									{
										id:			'autofocus',
										name: 		'<code>autofocus</code> attribute', 
										url:		'http://www.w3.org/TR/html5/association-of-controls-and-forms.html#autofocusing-a-form-control'
									}, {
										id:			'autocomplete',
										name: 		'<code>autocomplete</code> attribute',
										url:		'http://www.w3.org/TR/html5/common-input-element-attributes.html#attr-input-autocomplete'
									}, {
										id:			'placeholder',
										name: 		'<code>placeholder</code> attribute',
										url:		'http://www.w3.org/TR/html5/common-input-element-attributes.html#attr-input-placeholder'
									}, {
										id:			'multiple',
										name: 		'<code>multiple</code> attribute',
										url:		'http://www.w3.org/TR/html5/common-input-element-attributes.html#attr-input-multiple'
									}, {
										id:			'dirname',
										name: 		'<code>dirName</code> attribute',
										url:		'http://www.w3.org/TR/html5/common-input-element-attributes.html#attr-input-dirname'
									}
								]
					}, {
						id:		'selectors',
						name:	'CSS selectors',
						items:	[
									{
										id:			'valid',
										name: 		'<code>:valid</code> selector', 
										url:		'http://www.w3.org/TR/html5/links.html#selector-valid'
									}, {
										id:			'invalid',
										name: 		'<code>:invalid</code> selector', 
										url:		'http://www.w3.org/TR/html5/links.html#selector-invalid'
									}, {
										id:			'optional',
										name: 		'<code>:optional</code> selector', 
										url:		'http://www.w3.org/TR/html5/links.html#selector-optional'
									}, {
										id:			'required',
										name: 		'<code>:required</code> selector', 
										url:		'http://www.w3.org/TR/html5/links.html#selector-required'
									}, {
										id:			'in-range',
										name: 		'<code>:in-range</code> selector', 
										url:		'http://www.w3.org/TR/html5/links.html#selector-in-range'
									}, {
										id:			'out-of-range',
										name: 		'<code>:out-of-range</code> selector', 
										url:		'http://www.w3.org/TR/html5/links.html#selector-out-of-range'
									}, {
										id:			'read-write',
										name: 		'<code>:read-write</code> selector', 
										url:		'http://www.w3.org/TR/html5/links.html#selector-read-write'
									}, {
										id:			'read-only',
										name: 		'<code>:read-only</code> selector', 
										url:		'http://www.w3.org/TR/html5/links.html#selector-read-only'
									}
								]
					}, {
						id:		'events',
						name:	'Events',
						items:	[
									{
										id:			'oninput',
										name: 		'<code>oninput</code> event', 
										url:		'http://www.w3.org/TR/html5/common-input-element-attributes.html#event-input-input'
									}, {
										id:			'onchange',
										name: 		'<code>onchange</code> event', 
										url:		'http://www.w3.org/TR/html5/common-input-element-attributes.html#event-input-change'
									}, {
										id:			'oninvalid',
										name: 		'<code>oninvalid</code> event', 
										url:		'http://www.w3.org/TR/html5/webappapis.html#events'
									}
								]
					},
					
					'<strong>Forms</strong>',
					
					{
						id:		'formvalidation',
						name:	'Form validation',
						items:	[
									{
										id:			'checkValidity',
										name: 		'<code>checkValidity</code> method', 
										url:		'http://www.w3.org/TR/html5/forms.html#dom-form-checkvalidity'
									}, {
										id:			'noValidate',
										name: 		'<code>noValidate</code> attribute', 
										url:		'http://www.w3.org/TR/html5/association-of-controls-and-forms.html#attr-fs-novalidate'
									}
								]
					}
				]
	}, {
		id:		'interaction',
		name: 	'User interaction',
		items:	[
					'<strong>Drag and drop</strong>',
					
					{
						id:		'attributes',
						name:	'Attributes',
						items:	[
									{
										id:			'draggable',
										name: 		'<code>draggable</code> attribute', 
										url:		'http://www.w3.org/TR/html5/dnd.html#the-draggable-attribute'
									}, {
										id:			'dropzone',
										name: 		'<code>dropzone</code> attribute', 
										url:		'http://www.w3.org/TR/html5/dnd.html#the-dropzone-attribute'
									}
								]
					}, {
						id:		'events',
						name:	'Events',
						items:	[
									{
										id:			'ondrag',
										name: 		'<code>ondrag</code> event', 
										url:		'http://www.w3.org/TR/html5/dnd.html#dndevents'
									}, {
										id:			'ondragstart',
										name: 		'<code>ondragstart</code> event', 
										url:		'http://www.w3.org/TR/html5/dnd.html#dndevents'
									}, {
										id:			'ondragenter',
										name: 		'<code>ondragenter</code> event', 
										url:		'http://www.w3.org/TR/html5/dnd.html#dndevents'
									}, {
										id:			'ondragover',
										name: 		'<code>ondragover</code> event', 
										url:		'http://www.w3.org/TR/html5/dnd.html#dndevents'
									}, {
										id:			'ondragleave',
										name: 		'<code>ondragleave</code> event', 
										url:		'http://www.w3.org/TR/html5/dnd.html#dndevents'
									}, {
										id:			'ondragend',
										name: 		'<code>ondragend</code> event', 
										url:		'http://www.w3.org/TR/html5/dnd.html#dndevents'
									}, {
										id:			'ondrop',
										name: 		'<code>ondrop</code> event', 
										url:		'http://www.w3.org/TR/html5/dnd.html#dndevents'
									}
								]
					},
					
					'<strong>HTML editing</strong>',
					
					{
						id:		'editingElements',
						name:	'Editing elements',
						items:	[
									{
										id:			'contentEditable',
										name: 		'<code>contentEditable</code> attribute', 
										url:		'http://www.w3.org/TR/html5/editing.html#contenteditable'
									}, {
										id:			'isContentEditable',
										name: 		'<code>isContentEditable</code> property', 
										url:		'http://www.w3.org/TR/html5/editing.html#contenteditable'
									}
								]
					}, {
						id:		'editingDocuments',
						name:	'Editing documents',
						items:	[
									{
										id:			'designMode',
										name: 		'<code>designMode</code> attribute', 
										url:		'http://www.w3.org/TR/html5/editing.html#designMode'
									}
								]
					}, {
						id:		'apis',
						name:	'APIs',
						items:	[
									{
										id:			'execCommand',
										name: 		'<code>execCommand</code> method', 
										url:		'http://www.w3.org/TR/html5/dnd.html#execCommand'
									}, {
										id:			'queryCommandEnabled',
										name: 		'<code>queryCommandEnabled</code> method', 
										url:		'http://www.w3.org/TR/html5/dnd.html#dom-document-querycommandenabled'
									}, {
										id:			'queryCommandIndeterm',
										name: 		'<code>queryCommandIndeterm</code> method', 
										url:		'http://www.w3.org/TR/html5/dnd.html#dom-document-querycommandindeterm'
									}, {
										id:			'queryCommandState',
										name: 		'<code>queryCommandState</code> method', 
										url:		'http://www.w3.org/TR/html5/dnd.html#dom-document-querycommandstate'
									}, {
										id:			'queryCommandSupported',
										name: 		'<code>queryCommandSupported</code> method', 
										url:		'http://www.w3.org/TR/html5/dnd.html#dom-document-querycommandsupported'
									}, {
										id:			'queryCommandValue',
										name: 		'<code>queryCommandValue</code> method', 
										url:		'http://www.w3.org/TR/html5/dnd.html#dom-document-querycommandvalue'
									}
								]
					}, 
					
					'<strong>Spellcheck</strong>',
					
					{
						id:			'spellcheck',
						name: 		'<code>spellcheck</code> attribute', 
						url:		'http://www.w3.org/TR/html5/editing.html#attr-spellcheck'
					}
				]
	}, {
		id:		'history',
		name: 	'History and navigation',
		items:	[
					{
						id:			'history',
						name: 		'Session history', 
						url:		'http://www.w3.org/TR/html5/history.html#history'
					}
				]
	}, {
		id:		'microdata',
		name:	'Microdata',
		items:	[
					{
						id:			'microdata',
						name: 		'Microdata', 
						url:    	'http://www.w3.org/TR/microdata/'
					}
				]
	}, {
		id:		'offline',
		name: 	'Web applications',
		items:	[
					{
						id:			'applicationCache',
						name: 		'Application Cache', 
						url:		'http://www.w3.org/TR/html5/offline.html#offline'
					}, {
						id:			'registerProtocolHandler',
						name: 		'Custom scheme handlers', 
						url:		'http://www.w3.org/TR/html5/timers.html#custom-handlers'
					}, {
						id:			'registerContentHandler',
						name: 		'Custom content handlers', 
						url:		'http://www.w3.org/TR/html5/timers.html#custom-handlers'
					}, {
						id:			'addSearchProvider',
						name: 		'Custom search providers', 
						url:		'http://www.whatwg.org/specs/web-apps/current-work/#dom-external-addsearchprovider'
					}
				]
	}, {
		id:		'security',
		name:	'Security',
		items:	[
					{
						id:			'sandbox',
						name: 		'Sandboxed <code>iframe</code>', 
						url:		'http://www.w3.org/TR/html5/the-iframe-element.html#attr-iframe-sandbox'
					}, {
						id:			'seamless',
						name: 		'Seamless <code>iframe</code>', 
						url:		'http://www.w3.org/TR/html5/the-iframe-element.html#attr-iframe-seamless'
					}, {
						id:			'srcdoc',
						name: 		'<code>iframe</code> with inline contents', 
						url:		'http://www.w3.org/TR/html5/the-iframe-element.html#attr-iframe-srcdoc'
					}
				]
	}, {
		id:		'various',
		name:	'Various',
		items:	[
					{
						id:			'scoped',
						name: 		'Scoped <code>style</code> element', 
						url:		'http://www.w3.org/TR/html5/semantics.html#attr-style-scoped'
					}, {
						id:			'async',
						name: 		'Asyncronous script execution', 
						url:		'http://www.w3.org/TR/html5/scripting-1.html#attr-script-async'
					}, {
						id:			'onerror',
						name: 		'Runtime script error reporting', 
						url:		'http://www.w3.org/TR/html5/webappapis.html#report-the-error'
					}, {
						id:			'base64',
						name: 		'Base64 encoding and decoding', 
						url:		'http://www.w3.org/TR/html5/webappapis.html#atob'
					}
				]
	},
	
	'Related specifications',
	
	{
		id:		'location',
		name:	'Location and Orientation',
		items:	[
					{
						id:			'geolocation',
						name: 		'Geolocation', 
						url:    	'http://www.w3.org/TR/geolocation-API/'
					}, {
						id:			'orientation',
						name: 		'Device Orientation', 
						url:    	'http://dev.w3.org/geo/api/spec-source-orientation.html'
					}
				]
	}, {
		id:		'webgl',
		name:	'WebGL',
		items:	[
					{
						id:			'context',
						name: 		'3D context', 
						url:    	'http://www.khronos.org/registry/webgl/specs/latest/'
					}, {
						id:			'datatypes',
						name:		'Native binary data',
						items:		[
										{
											id:			'ArrayBuffer',
											name: 		'<code>ArrayBuffer</code>', 
											url:    	'http://www.khronos.org/registry/typedarray/specs/latest/#5'
										}, {
											id:			'Int8Array',
											name: 		'<code>Int8Array</code>', 
											url:    	'http://www.khronos.org/registry/typedarray/specs/latest/#7'
										}, {
											id:			'Uint8Array',
											name: 		'<code>Uint8Array</code>', 
											url:    	'http://www.khronos.org/registry/typedarray/specs/latest/#7'
										}, {
											id:			'Int16Array',
											name: 		'<code>Int16Array</code>', 
											url:    	'http://www.khronos.org/registry/typedarray/specs/latest/#7'
										}, {
											id:			'Uint16Array',
											name: 		'<code>Uint16Array</code>', 
											url:    	'http://www.khronos.org/registry/typedarray/specs/latest/#7'
										}, {
											id:			'Int32Array',
											name: 		'<code>Int32Array</code>', 
											url:    	'http://www.khronos.org/registry/typedarray/specs/latest/#7'
										}, {
											id:			'Uint32Array',
											name: 		'<code>Uint32Array</code>', 
											url:    	'http://www.khronos.org/registry/typedarray/specs/latest/#7'
										}, {
											id:			'Float32Array',
											name: 		'<code>Float32Array</code>', 
											url:    	'http://www.khronos.org/registry/typedarray/specs/latest/#7'
										}, {
											id:			'Float64Array',
											name: 		'<code>Float64Array</code>', 
											url:    	'http://www.khronos.org/registry/typedarray/specs/latest/#7'
										}, {
											id:			'DataView',
											name: 		'<code>DataView</code>', 
											url:    	'http://www.khronos.org/registry/typedarray/specs/latest/#8'
										}
									]
					}
				]
	}, {
		id:		'communication',
		name: 	'Communication',
		items:	[
					{
						id:			'postMessage',
						name: 		'Cross-document messaging', 
						url:    	'http://dev.w3.org/html5/postmsg/'
					}, {
						id:			'eventSource',
						name: 		'Server-Sent Events', 
						url:		'http://www.w3.org/TR/eventsource/'
					}, {
						id:			'xmlhttprequest2',
						name:		'XMLHttpRequest Level 2',
						items:		[
										{
											id:			'upload',
											name: 		'Upload files', 
											url:    	'http://www.w3.org/TR/XMLHttpRequest2/#the-upload-attribute'
										}, {
											id:			'textresponse',
											name: 		'Text response type', 
											url:    	'http://www.w3.org/TR/XMLHttpRequest2/#dom-xmlhttprequest-responsetype'
										}, {
											id:			'documentresponse',
											name: 		'Document response type', 
											url:    	'http://www.w3.org/TR/XMLHttpRequest2/#dom-xmlhttprequest-responsetype'
										}, {
											id:			'arrayresponse',
											name: 		'Array buffer response type', 
											url:    	'http://www.w3.org/TR/XMLHttpRequest2/#dom-xmlhttprequest-responsetype'
										}, {
											id:			'blobresponse',
											name: 		'Blob response type', 
											url:    	'http://www.w3.org/TR/XMLHttpRequest2/#dom-xmlhttprequest-responsetype'
										}
									]
					}, {
						id:			'webSocket',
						name: 		'WebSocket', 
						url:		'http://www.w3.org/TR/websockets/'
					}
				]
	}, {
		id:		'files',
		name:	'Files',
		items:	[
					{
						id:			'fileReader',
						name: 		'FileReader API', 
						url:    	'http://dev.w3.org/2006/webapi/FileAPI/#filereader-interface'
					}, {
						id:			'fileSystem',
						name: 		'FileSystem API', 
						url:    	'http://www.w3.org/TR/file-system-api/'
					}
				]
	}, {
		id:		'storage',
		name: 	'Storage',
		items:	[
					{
						id:			'sessionStorage',
						name: 		'Session Storage', 
						url:    	'http://www.w3.org/TR/webstorage/#the-sessionstorage-attribute'
					}, {
						id:			'localStorage',
						name: 		'Local Storage', 
						url:    	'http://www.w3.org/TR/webstorage/#the-localstorage-attribute'
					}, {
						id:			'indexedDB',
						name: 		'IndexedDB', 
						url:		'http://www.w3.org/TR/IndexedDB/'
					},
					
					'<em>The Web SQL Database specification is no longer being updated and has been replaced by IndexedDB. Because at least 3 vendors have shipped implementations of this specification we still include it in this test.</em>',
				
					{
						id:			'sqlDatabase',
						name: 		'Web SQL Database', 
						url:		'http://www.w3.org/TR/webdatabase/'
					}
				]
	}, {
		id:		'workers',
		name:	'Workers',
		items:	[
					{
						id:			'worker',
						name: 		'Web Workers', 
						url:    	'http://www.w3.org/TR/workers/#dedicated-workers-and-the-worker-interface'
					}, {
						id:			'sharedWorker',
						name: 		'Shared Workers', 
						url:    	'http://www.w3.org/TR/workers/#shared-workers-and-the-sharedworker-interface'
					}
				]
	}, {
		id:		'device',
		name:	'Local multimedia',
		items:	[
					{
						id:		'getUserMedia',
						name: 	'Access the webcam', 
						url:	'http://dev.w3.org/2011/webrtc/editor/getusermedia.html'
					}
				]
	}, {
		id:		'notifications',
		name:	'Notifications',
		items:	[
					{
						id:			'notifications',
						name: 		'Web Notifications', 
						url:		'http://www.w3.org/TR/notifications/'
					}
				]
	}, {
		id:		'other',
		name: 	'Other',
		items:	[
					{
						id:			'pagevisiblity',
						name: 		'Page Visibility', 
						url:		'http://www.w3.org/TR/page-visibility/'
					}, {
						id:			'getSelection',
						name: 		'Text selection', 
						url:		'http://dvcs.w3.org/hg/editing/raw-file/tip/editing.html#selections'
					}, {
						id:			'scrollIntoView',
						name: 		'Scroll into view'
					}
				]
	},
	
	'Experimental',
	
	{
		id:		'webaudio',
		name:	'Audio',
		items:	[
					{
						id:			'webaudio',
						name: 		'Web Audio API', 
						url:		'https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html'
					}
				]
	}, {
		id:		'animation',
		name: 	'Video and Animation',
		items:	[
					{
						id:			'requestFullScreen',
						name: 		'Full screen support', 
						url:		'http://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html#api'
					}, {
						id:			'requestAnimationFrame',
						name: 		'<code>window.requestAnimationFrame</code>', 
						url:		'http://www.w3.org/TR/animation-timing/#requestAnimationFrame'
					}
				]
	}
]
