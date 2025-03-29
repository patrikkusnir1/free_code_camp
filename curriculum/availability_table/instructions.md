##User Stories:

1. You should have a table with at least three columns and five rows, headers included. DONE
2. Cells in the first row should be table headers containing days of the week. DONE
3. Cells in the first column should be table headers with a class of time and should contain time values as their text. DONE
4. All data cells should have the class of available-#, where # is a number from 0 to 5 that specifies the number of available people at that time.
5. In your :root selector, you should define six CSS variables named --color#, where # is a number from 0 to 5, and assign them each a color value. Use these variables to set the background color of the corresponding .available-# elements. DONE
6. In your :root selector, you should define CSS variables named --solid-border and --dashed-border. Use these variables to style the bottom borders of your data cells, alternating between solid and dashed borders depending on the row. Give the rows either the class of sharp or half to style them.
7. You should have a div element with the id of legend. It should contain a span element with the text Availability and a div element with the id of legend-gradient. You should give the #legend-gradient element a linear gradient that transitions between all the colors from --color0 to --color5. Each color value should have two color stops (expressed as percentages) to make the transition between colors a hard line. Note: Be sure to link your stylesheet in your HTML to apply your CSS.
