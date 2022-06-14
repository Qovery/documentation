---
last_modified_on: "2022-06-14"
title: "Tests"
description: "Learn how to test screenshots"
---

import Steps from '@site/src/components/Steps';

import Jump from '@site/src/components/Jump';
import Alert from '@site/src/components/Alert';
import Assumptions from '@site/src/components/Assumptions';


These are the best results I got following Romaric's wishes to have screenshots within a coloured frame to add perspective and get a cleaner look-and-feel.

When taking the screenshots I resized my browser window to try and make the screenshots as narrow as possible to limit blurriness. That being said, blurriness is pretty much unavoidable since images are compressed when the documentation is generated (I'm guessing there's also some compression happening when exporting the screenshots from Figma). Also, adding a coloured frame reduces the space dedicated to the actual screenshot, so having super clear screenshots is impossible. The question is: do we think this is good enough?


Things we need to decide on: 

* The **colour of the frames**, so that it's as consistent as possible throughout the documentation.  
* For **smaller windows**: do we favour consistency (meaning we stick to the same frame size as for wider screenshots, see step 2), or do we favour clearer screenshots in their original size but in smaller frames (see step 3)?
* **Highlights on screenshots**: instead of having red frames or circles, I think it's best to use the same colour as the frame (dark or light purple). It should be enough to show readers where to look, without it being too ugly. We can keep it very lightweight using simple arrows or make things more obvious with frames?

I have my preferences, but curious to know yours :).

<Steps headingDepth={3}>
<ol>
<li>

Open your organization settings:

<p align="center">
<img src="/img/tests/test8.jpg" alt="Application" />
</p>

</li>
<li>

Create your cluster:

<p align="center">
<img src="/img/tests/test2.jpg" alt="Application" />
</p>

</li>
<li>

Create your cluster:

<p align="center">
<img src="/img/tests/test4.jpg" alt="Application" />
</p>

</li>
<li>

Click `Settings`:

<p align="center">
<img src="/img/tests/test6.jpg" alt="Application" />
</p>

</li>
</ol>
</Steps>


<Steps headingDepth={3}>
<ol>
<li>

Open your organization settings:

<p align="center">
<img src="/img/tests/test7.jpg" alt="Application" />
</p>

</li>
<li>

Create your cluster:

<p align="center">
<img src="/img/tests/test1.jpg" alt="Application" />
</p>

</li>
<li>

Create your cluster:

<p align="center">
<img src="/img/tests/test3.jpg" alt="Application" />
</p>

</li>
<li>

Click `Settings`:

<p align="center">
<img src="/img/tests/test5.jpg" alt="Application" />
</p>

</li>
</ol>
</Steps>



