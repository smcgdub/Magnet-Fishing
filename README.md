![Homepage displayed on multiple devices]() 

# **Magnet Fishing - UK Magnet Fishing Site Locations with Maps**

## **Introduction**

Magnet Fishing UK is a database of more than 200,000 British Archaeological Sites covering the whole of England, Scotland and Wales. It is regularly updated with new additions to the database every year. As so many magnet fishers love metal detecting, this database helps users find the best places to do both. 

## **Table of contents** 

### **1. User Experience (UX)**
  * 1.1 Target audience
  * 1.2 Visitor goals
  * 1.3 Business goals
  * 1.4 User stories
  * 1.5 Design choices
  * 1.6 Wire frames

### **2. Features**
  * 2.1 The Navbar
  * 2.2 The Footer
  * 2.3 The Homepage
  * 2.4 Search Results 
  * 2.5 About
  * 2.6 Gallery 
  * 2.7 News
  * 2.8 Resources
    * 2.8.1 Best place for magnet fishing 
    * 2.8.2 Using Archi database  
    * 2.8.3 Using old maps
    * 2.8.4 Best magnets to use
    * 2.8.5 Fishing tips and techniques 
  * 2.9 More
    * 2.9.1 FAQ
    * 2.9.2 Terms & Conditions
    * 2.9.3 Contact Us
  * 2.10 Subscribe 
  * 2.11 Features left to implement

### **3. Technologies/Languages Used**
  * 3.1 VSCode
  * 3.2 HTML5
  * 3.3 CSS
  * 3.4 JavaScript
  * 3.5 Pearl
  * 3.6 Bootstrap (Version 5)
  * 3.7 Animate CSS
  * 3.8 Google fonts 
  * 3.9 Font Awesome 
  * 3.10 Coolors
  * 3.11 Lightbox
  * 3.12 Balsamiq
  * 3.13 Grammarly
  * 3.14 Form Submit

### **4. Testing**
  * 4.1 See [testing.md](testing.md) document 

### **5. Deployment**

  * 5.1 Deployment 
  * 5.2 Cloning 
  * 5.3 Cloning Desktop

### **6. Credits**
  * 6.1 Media
  * 6.2 Code

### **7. Contact**
  * 7.1 LinkedIn
  * 7.2 Email
  * 7.3 Skype

### **8. Disclaimer**

  * 8.1 Disclaimer on project 
___

<details>
<summary>1 User Experience (UX)</summary>
<br>

### **1.1 Target Audience**

This website is aimed at anyone who is interested in taking up magnet fishing, or anyone who is currently active as a Magnet Fisher. Magnet Fishing. Magnet fishing uses a strong magnet to try and grab ferrous metal objects that are hidden or lost underwater.

### **1.2 Visitor goals**    

As i visitor to the site i want to be able to search nationwide for locations that may prove fruitful as a magnet fisher. I also want to keep up to date with news and events in the Magnet Fishing community.

### **1.3 Business goals**

The site provides some limited information to users free of charge, however, to access all of the records requires users to have paid subscription. The business goal of the site is to drive paid subscription membership.

### **1.4 User Stories**
<br>


### **1.5 Design choices** 

**FONTS**

I decided i would use the Google font [Ibarra Real Nova](https://fonts.google.com/specimen/Ibarra+Real+Nova) for this project.

![Image of Ibarra Real Nova font](/assets/images/readme_images/ibarra_real_nova_font.png)

**ICONS**

The icons that i have used on the site came from [Font Awesome](https://fontawesome.com/)

**COLORS**

The bulk of the site is made up of full page background imagery. This was done intentionally so each page has its own feel without needing to add a lot of CSS. The colour scheme we used for the site is below:

![Image of colour scheme used](/assets/images/readme_images/magnet_fishing_colours.png)

### **1.6 Wire Frames** 

<!-- Need to add these -->
[Homepage Desktop]()<br>
[Homepage Mobile & iPad]()<br>
[About Us Desktop]()<br>
[About Us Mobile & iPad]()<br>
[Cleaning Services Desktop]()<br>
[Cleaning Services Mobile & iPad]()<br>
[Our Promise Desktop]()<br>
[Our Promise Mobile & iPad]()<br>
[FAQ Desktop]()<br>
[FAQ Mobile & iPad]()<br>
[Contact Us Desktop]()<br>
[Contact Us Mobile & iPad]()

</details>

<hr>

<details>
<summary>2. Features</summary>
<br>

### **2.1 The Navbar**

![Image of desktop Navbar](/assets/images/readme_images/desktop_navbar.png)

The Navbar i used is a standard Bootstrap 5 Navbar. The menu items in the Navbar may change over time as the site develops, but the current ones we have are: 

1. Home
2. About
3. Gallery
4. News
5. Resources<br>
    5.1 Best place for magnet fishing<br>
    5.2 Using Archi database<br>
    5.3 Using old maps<br>
    5.4 Best magnets to use<br>
    5.5 Fishing tips and techniques<br>
6. More<br>
    6.1 FAQ
    6.2 Terms & Conditions
    6.3 Contact Us
7. Subscribe

On mobile devices the Navbar will collapse and expand depending on the users screen size. The navbar can be collapsed and expanded by clicking on the 3 Ellipsis dots. I chose not to use a hamburger menu as the Ellipsis dots looked better.   

**MOBILE NAVBAR**
![Image of mobile Navbar](/assets/images/readme_images/mobile_navbar.png)

<br>

**MOBILE NAVBAR EXPANDED**
![Image of mobile Navbar](/assets/images/readme_images/mobile_navbar_expanded.png)


### **2.2 The Footer** 

![Image of main footer](/assets/images/readme_images/footer_desktop.png)

The footer on both desktop and mobile is broken up into 3 separate sections. Those sections are:

**1. Navigation**

The navigate section has most of the links that the user will find in the navbar. The user can click on these links and redirect to these pages direct from the footer

**2. Subscribe to newsletter**

To help drive subscriptions and user engagement there is a subscribe to our newsletter input box in the footer  

**3. Copyright and social media links**

Finally the sub footer contains the copyright and social media links. There is also a scroll to top of page button next to the icons. 

**Mobile Footer**

On mobile devices the footer will rearrange and change to a stacked display. Users will still see all of the elements on mobile they do on desktop, only the layout is rearranged. 

![Image of mobile footer](/assets/images/readme_images/footer_mobile.png)

### **2.3 The Homepage**

![Image of home page](/assets/images/readme_images/homepage.png)

The homepage is where the main search functionality of the site is hosted. Here users are prompted to enter a geographical location in the UK and press the go fishing button to perform a search. The ARCHI UK search engine will then deliver all of the results on a new page. The results displayed will be capped to within a specified radius of the original geographical search area.

**THE SEARCH BAR**

![Image of search bar](/assets/images/readme_images/homepage_search_bar.png)

The search bar is a bootstrap form that has 2 input fields and and an action button. The first input field is where the user will enter the georgraphical location to search.

The second input field is a hidden password field. The search functionality of the site will return different data for subscribed users vs none subscribed users. The default site functionality is for none subscribed users. The search functionality will not work if the password field is not on the form, hence why the input is hidden. 

The action button has a JavaScript `onClick()` function on it that is called when the user clicks to perform a search.

### **2.4 Search Results**

The search results page is generated after a user has entered geographical location in the search bar on the homepage. The search results page has 2 separate sections.

The first section will display the different types of maps that are available to the user for the location they have searched in. The user will be returned current maps as well as old historical maps (See image below)

![Image of search results page maps](/assets/images/readme_images/search_results_maps.png)

The second section will show the user all of the individual reports for the geographical area they have searched in. These will be returned in a list format (See image below)

![Image of search results page reports](/assets/images/readme_images/search_results_list.png)

If the user is a paid subscriber then they will be able to access all of the reports, maps and content. If the user is an unsubscribed user then only a portion of the data will be free to view. Users can see what data is behind the paywall as it will say `[upgrade]` next to it. They need ot become a subscriber to access all of this data.

### **2.5 About**
![Image of about us page](/assets/images/readme_images/about_page.png)

The about page gives a short description about the Magnet Fishing website, what the site offers to users, and also mentions the benefits of becoming a paid subscribed member. 

### **2.6 Gallery**
![Image of gallery page](/assets/images/readme_images/gallery.png)

The gallery page is a mobile responsive page that uses lightbox. The gallery page is made up of 3 columns and each column has a number of rows in it. Each picture is on its own row. This structure was chosen so the gallery pictures would all fit together no matter what size image is uploaded.

**HOVER FUNCTIONALITY** 

To add some responsiveness to the site when a desktop user hovers over an image the image will slightly increase in size.

**VIEW IMAGE**

Finally when a user clicks on an image the image will enlarge. Here users will also see the title of the image, how many images are in the entire gallery, and also the back and forward controls to allow the user to click forwards and backwards through the images in full screen. The user can also close the image by clicking on the `X` at the bottom of the image to return to the gallery.

![Image full screen](/assets/images/readme_images/gallery_image_full_screen.png)

**MOBILE GALLERY**

On mobile devices the page will re-adjust and the page will go from 3x columns to just 1x column.

![Image mobile gallery](/assets/images/readme_images/gallery_mobile.png)

### **2.7 News**
![Image of news page](/assets/images/readme_images/news_page.png)

The news page is divided up into 2 sections. At the top of the page users will see the sign up to our newsletter prompt. This is a replica of the sign up to our newsletter found in the footer, it just has different CSS. 

Below the newsletter sign up prompt users see the a newsfeed section. Each newsfeed story will display 3 pieces of data.

1. The date the news item was posted
2. A short summary of what the news story was about
3. A link to the original article

![Image of individual news story](/assets/images/readme_images/newsfeed_template.png)

As the newsfeed will contain a lot of stories to be displayed, i have added an `overflow-y: scroll` in the newsfeed so all of the content will be be contained in its `<div>` and users can scroll through the stories. The latest stories will appear at the top with the oldest stories appearing at the bottom. 

### **2.8 Resources Dropdown**
![Image of resources dropdown](/assets/images/readme_images/resources_dropdown.png)

The resources dropdown menu contains links to the following pages:

1. Best place for magnet fishing<br>
2. Using Archi database<br>
3. Using old maps<br>
4. Best magnets to use<br>
5. Fishing tips and techniques<br> 

**Best place for magnet fishing**
![Image of best place for magnet fishing page](/assets/images/readme_images/best_place%20for_magnet_fishing.png)

This page will inform users the best places to go Magnet Fishing

**Using Archi database**
![Image of using archi database page](/assets/images/readme_images/using_archi_database.png)

This page will provide instructions to users on how to use the Archi database so they can get the best results from their subscription and the website.

**Using Old Maps**
![Image of using old maps page](/assets/images/readme_images/using_old_maps.png)

The Archi database will also provide paid members with access to historical maps. Many of these maps date back centuries to roman times. These maps are different than the modern maps we use today. This page will inform users how to use these old maps correctly.

**Best magnets to use**
![Image of best magnets to use page](/assets/images/readme_images/best_magnets_to_use.png)

This page will provide users with information on the different types of magnets to use when magnet fishing. Different types of magnets will have different properties and will have different benefits when being used.

**Fishing tips and techniques**
![Image of fishing tips and techniques page](/assets/images/readme_images/fishing_tips_and_techniques.png)

This page will provide users with tips and techniques to use when magnet fishing so they can get the best results.

### **2.9 The More Dropdown**
![Image of the more dropdown menu](/assets/images/readme_images/more_dropdown.png)

The resources dropdown menu contains links to the following pages:

1. FAQ
2. Terms & Conditions
3. Contact Us

**F.A.Q Page**
![Image of the faq page](/assets/images/readme_images/faq_page.png)

The FAQ page is a page that contains a list of frequently asked questions that users of the site and Magnet Fishers may have. 

**Terms & Conditions Page**
![Image of the terms & conditions page](/assets/images/readme_images/t_and_c_page.png)

The Terms & Conditions page is a page that contains a list of the terms and conditions that users of the site and Magnet Fishers must agree to.

**Contact Us Page**
![Image of the contact us page](/assets/images/readme_images/contact_us_page.png)

The contact us page has a contact form that comes from formsubmit. Users of the site can use this form to contact the site administrators. Formsubmit dont have highly customizable forms so the fields on the form are:

1. The users name - `<input type="text">`
2. The users email `<input type="email">`
3. The users message `<textarea>`
4. Send message button `<button type="submit">` 

### **2.10 Subscribe**
![Image of the subscribe page](/assets/images/readme_images/subscribe_page.png)

The subscribe page is where users can purchase a full paid membership for the site. User have an option of purchasing a monthly subscription, or an annual subscription. The annual subscription offers considerable savings over a monthly subscription.

### **2.11 Features Left To Implement**
</details>

<hr>

<details>
<summary>3. Technologies/Languages Used</summary>
<br>

3.1 [VS Code](https://code.visualstudio.com/) - I used Visual Studio Code for all of the coding during the project<br>
3.2 [HTML5](https://en.wikipedia.org/wiki/HTML) - The markup language used for this project.<br>
3.3 [CSS](https://en.wikipedia.org/wiki/CSS) - I used CSS to help alter and adjust the presentation of the website to create a pleasant user experience.<br>
3.4 [JavaScript](https://www.javascript.com/about) - JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.<br>
3.5 [Pearl](https://www.perl.org/) - Pearl is a highly capable, feature-rich programming language with over 30 years of development. The Archi search engine was developed in pearl<br>
3.6 [Bootstrap 5](https://getbootstrap.com/) - Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites. Bootstrap 5 is the version i used for the development of this project.<br>
3.7 [Animate CSS](https://animate.style/) - Animate.css is a library of ready-to-use, cross-browser animations for use in your web projects. Great for emphasis, home pages, sliders, and attention-guiding hints.<br>
3.8 [Google fonts](https://fonts.google.com/) - A library of 1,023 free licensed font families for developers to choose from.<br>
3.9 [Font Awesome](https://fontawesome.com/) - A library of 1,600+ free to use icons that can be customized even further with CSS<br>
3.10 [Coolors](https://coolors.co/) - A free to use colour generator where users can browse and create beautiful color combinations.<br>
3.11 [Lightbox](https://lokeshdhakar.com/projects/lightbox2/) - Lightbox is a free to use script used to overlay images on the current page. It's a snap to setup and works on all modern browsers.<br>
3.12 [Balsamiq](https://balsamiq.com/wireframes/)- Balsamiq is a rapid low-fidelity UI wireframing tool that reproduces the experience of sketching on a notepad or whiteboard. Used for producing the wire frames for this project.
3.13 [Grammarly](https://www.grammarly.com/) - Grammarly is a cloud-based typing assistant that reviews spelling, grammar, punctuation, clarity, engagement, and delivery mistakes. It uses artificial intelligence to identify and search for an appropriate replacement for the error it locates.<br>
3.14 [Form Submit](https://formsubmit.co/) - Formsubmit is a product that was developed by Devro Labs. Form submit is a free to use contact form that requires very little set up and allows users to directly message website administrators. 
</details>

<hr>

<details>
<summary>4. Testing</summary>
<br>

* Testing information can be found in the [testing.md](testing.md) file
</details>

<hr>

<details>
<summary>5. Deployment</summary>
<br>

### **5.1 Deployment**  

The site is currently deployed on ARCHI UK servers. The link to the published site can be found by clicking here [Magnet Fishing](https://magnetfishinguk.com/)

### **5.2 Cloning**

You can clone the projects repository to your local computer by following the steps below:

<!-- **Cloning a repository using the command line** -->

1. On github navigate to the project repository. The link can be found here: https://github.com/smcgdub/Magnet-Fishing
2. Click on the tab that says < >code 
3. Above the files, click the button that says &#8595;code

![Github code button](/assets/images/readme_images/github-code-button.png)

4. From the menu select HTTPS
5. Click on the clipboard icon on the right hand side (Image below)

![Github copy link button](/assets/images/readme_images/github-clipboard.png)

6. Open the terminal in your IDE
7. Change the current working directory to the location where you want the cloned directory.
8. In terminal type `git clone` and then paste the URL you copied earlier 
https://github.com/smcgdub/Magnet-Fishing
9. Press Enter to create your local clone.

### **5.3 Cloning To Desktop**
You can also clone the project from Github direct to your Desktop. To do this you can do the following: 

1. On github navigate to the projects repository. The link can be found here: https://github.com/smcgdub/Magnet-Fishing
2. Click on the tab that says < >code 
3. From the dropdown menu select the option DownloadZip
4. The zipped file will now download to your desktop, drag and drop this unzipped file to your IDE and you can open the project. 
</details>

<hr>

<details>
<summary>6. Credits</summary>
<br>

### **6.1 Media** 

1. Background image on the homepage goes to [Chris Boland](https://unsplash.com/@chrisboland) - Link to image is [here](https://unsplash.com/photos/t5qBPfytTyE)
2. Background image on the about us page goes to [Thomas Dils](https://unsplash.com/@tdils) - Link to image is [here](https://unsplash.com/photos/n5ze51K3Kb8)
3. Background image on the news page goes to [Markus Winkler](https://unsplash.com/@markuswinkler) - Link to image is [here](https://unsplash.com/photos/aId-xYRTlEc)
4. Background image on the best places for Magnet Fishing page goes to [Annie Spratt](https://unsplash.com/@anniespratt) - Link to image is [here](https://unsplash.com/photos/AFB6S2kibuk)
5. Background image on the best places for Magnet Fishing page goes to [Annie Spratt](https://unsplash.com/@anniespratt) - Link to image is [here](https://unsplash.com/photos/AFB6S2kibuk)
6. Background image on the using the Archi database page goes to [Dariusz Sankowski](https://unsplash.com/@dariuszsankowski) - Link to image is [here](https://unsplash.com/photos/3OiYMgDKJ6k)
7. Background image on the using the using old maps page goes to [Nik Shuliahin](https://unsplash.com/@tjump) - Link to image is [here](https://unsplash.com/photos/rkFIIE9PxH0)
8. Background image on the best magnets to use page goes to [Dan Cristian Pădureț](https://unsplash.com/@dancristianpaduret) - Link to image is [here](https://unsplash.com/photos/BxgVEo_rF-o)
9. Background image on the fishing tips & techniques page goes to [mostafa meraji](https://unsplash.com/@mostafa_meraji) - Link to image is [here](https://unsplash.com/photos/mh_uzh5A2uM)
10. Background image on the F.A.Q and the terms & conditions page goes to [John Salzarulo](https://unsplash.com/@johnsalzarulo) - Link to image is [here](https://unsplash.com/photos/wtjrpjZABcQ)
11. Background image on the contact us page goes to [Ben Lambert](https://unsplash.com/@benlambertmedia) - Link to image is [here](https://unsplash.com/photos/RNOJMHP1TIg)
12. Background image on the subscribe page goes to [Andrew Neel](https://unsplash.com/@andrewtneel) - Link to image is [here](https://unsplash.com/photos/1-29wyvvLJA)

### **6.2 Code** 

The image gallery on the site was based upon a tutorial i found on YouTube by a content creator called [Faruk](https://www.youtube.com/channel/UCWSxIkJatgMC3UBwStTgu1Q). The tutorial can be viewed [here](https://www.youtube.com/watch?v=IAUd5YZiy6w). I have added some of my own code to this gallery so its look and functionality works the way i wanted it to. 
</details>

<hr>

<details>
<summary>7. Contact Me</summary>
<br>

Feel free to contact me on any of the following channels:<br>

7.1 [LinkedIn](https://www.linkedin.com/in/stephenmcgovern01/)<br>
7.2 [Email](mailto:smcgdub@gmail.com)<br>
7.3 [Skype](https://join.skype.com/invite/ndruMu7qVuKZ)<br>
7.4 [My Portfolio Page](https://stephens-portfolio.com/)<br>
</details>

<hr>

<details>
<summary>8. Disclaimer</summary>
<br>

</details>

<hr>