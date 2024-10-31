=== Front End Suite ===
Contributors: chrisdann
Tags: effects, align, type, dropcap
Requires at least: 5.1
Tested up to: 5.4
Requires PHP: 5.6
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
 
Useful front end tools that add visual effects to your site

== Description ==

Please note you need to be able to add classes and IDs to elements to use these tools. See Frequently Asked Questions for more information.

** Vertical Equaliser **

Equalises the height of elements on the page. For example, you have 3 columns and you want the title of each to be the same height regardless of its length, so the columns display evenly.

Add the class 'rbveq' and 'rbveq--groupname' to the elements you want to be the same height, where groupname is a unique identifier for that group. So your three titles might look like this:

<h3 class="rbveq rbveq--columntitle">Foo Bar</h3>

All those elements will now have the same height

By default, elements will not be equalised below 768px, but you can customise the breakpoint by adding the class rbveq-breakpoint--xx to any one of the elements in the group, where xx is the breakpoint below which you do not want the elements to be height-equalised.

** Autotype **

Autotype makes text appear to type itself out once it scrolls into view. Use only on text elements, by adding the class 'rb-autotype' and a unique ID.

For example, if you want a paragraph element to autotype when it scrolls into view you would use:

<p class="rb-autotype" id="myuniqueid">Lorem Ipsum</p>

** Drop Cap **

Turns the first letter of a paragraph into a drop cap. Simply add the class "rb-dropcap" to the text element. So if you want a paragraph element to start with a dropcap:

<p class="rb-dropcap">Lorem Ipsum</p>

== Frequently Asked Questions ==

= Can I use these tools with Gutenberg editor? =

You can use Autotype and Drop Cap. Click on "edit as HTML" for any text element and add the classes/id as necessary.

= Can I use these tools with my visual builder plugin (DIVI, Elementor, etc) =

If you are able to add classes and IDs to elements then yes. More instructions for individual builders are coming soon. In the meantime please contact me if you need support.

= Can I get support? =

Yes. Email me at chris@redballoonweb.com and I will help you implement the plugin on your website.