#Sterling

Yet another web dropdown menu.

---

##Features

###Seperation of Style and Functionality

Unlike many existing dropdown menus, Sterling does not come with any base styles. You can go crazy making it look sweet without having to worry about breaking it or fighting any existing styles.

###Infinite Levels of Nesting

No need to do anything extra on your end. Sterling supports infinite levels of nesting out of the box. That means you'll never have to write a line like this again (I'm looking at you Suckerfish): 

    #nav li:hover ul ul, #nav li:hover ul ul ul, #nav li:hover ul ul ul ul, #nav li.sfhover ul ul, #nav li.sfhover ul ul ul, #nav li.sfhover ul ul ul ul 

###Variable Widths

If you include sterling.js Sterling will calculate the appropriate widths of each dropdown menu based on the longest item in that grouping. If you prefer fixed widths for all dropdowns, simply don't include sterling.js. Simple.

###jQuery not Required

jQuery is sweet but sometimes it might just be overkill for simple sites. Sterling.js is written in plain ol' javascript. 

###Works with dem Ghetto Browsas'

Sterling has been tested with IE6/7/8/9, Safari, Chrome, and Firefox. Note - Sterling.js is required to get IE6 to play nice with the hover pseudo class.

---

##Usage

**Step 1 -** Include sterling.css and sterling.js (optional) in your document's head like this:

```
<link href="/css/sterling.css" rel="stylesheet" />
<script src="/js/sterling.js" type="text/javascript"></script>
``` 

**Step 2 -** Create your nested menu using unordered lists. Be sure the root ul has the class *sterling*.

```
<ul class="sterling">
        <li>
                <a href="#">Item One</a>
		<ul>
		        <li>
		                <a href="#">Sub-Item One</a>
		        </li>
		        <li>
		                <a href="#">Sub-Item Two</a>
		        </li>
		</ul>
        </li>
        <li>
                <a href="#">Item Two</a>
        </li>
        <li>
                <a href="#">Item Three</a>
        </li>
</ul>
```

**Step 3 -** Style your menu however you'd like. You're free to use pretty much any styles you want, just be sure to stay away from positioning styles like margin, position, left, top, bottom, right etc. Here is an example style (note - if you're supporting IE6 still, be sure to include the ie6-hover class as well):

```
.sterling a{
	padding: 10px 25px;
	color: white;
}
.sterling li{
	background: gray;
}
.sterling li:hover, .sterling li.ie6-hover{
	background: red;
}
.sterling ul a{
	padding: 25px;
}
.sterling ul li{
	background: green;
	border-bottom: 1px solid white;
}
.sterling ul li:hover, .sterling ul li.ie6-hover{
	background: blue;
}
```

**Step 4 -** Celebrate.
