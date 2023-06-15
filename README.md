My first web application

Full specification
(Source: 
https://myfirstapp-syllabus.greenfox.academy/week03/my-first-web-app.md)

Layout and behaviour specification

    You can change the design if you want, but the point is that it should be looking nice
    It should be in the middle of the screen, with fixed size
    The gallery's content should be divided into two main parts: to the photo viewer and to the thumbnails.
    The photo viewer block should contain the two arrow buttons on the sides and the currently chosen photo in the middle.
    The thumbnails part should contain - as its name says - the small thumbnails, under the photo viewer block.
    The currently showed photo should have a half transparent description block on the bottom, with the photo's title and story.

Navigation/Interaction

    As we open the gallery the first picture from our collection should appear in the photo viewer area
    The related (first) thumbnail should be marked as active as well (outline, border.. etc.)
    By clicking on the arrow buttons on the sides, the content of the viewer block (the photo and its description) should change to the next or previous item.
    At the same time, the current thumbnail's outline/box-shadow should change based on the currently picked photo.
    If the gallery displays the first image, pressing the previous button should show the last one.
    If the gallery displays the last image, pressing the next button should show the first one.
    By clicking on a thumbnail, the image displays in the viewer area.
    The arrow buttons, the viewer area's content and the thumbnail's outline/border should work synchronously.